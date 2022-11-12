const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

settings = JSON.parse(fs.readFileSync("Settings.json", 'utf8'))

db = {}

logins = {}

tokens = {}

paramRegex = {
    "temperature": /[0-9.]*/,
    "sun": /[0-9.]*/,
    "humidity": /[0-9.]*/,
    "water": /[0-9.]*/,
    "ph": /[0-9.]*/,
    "identifier": /[0-9A-F]{12}/,
    "name": /[^]*/, // todo: limit length
    "type": /[^]*/, // todo: limit length
    "email": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // https://www.emailregex.com/
    "password": /[^]{12,128}/,
    "token": /[0-9a-f]{128}/,
    "pairing": /[01]/
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    if (settings.debug) {
        console.log(new Date().toString()+" "+req.method+" "+req.originalUrl)
        if (Object.keys(req.body).length > 0) {
            console.log("req.body: " + JSON.stringify(req.body))
        }
        if (Object.keys(req.query).length > 0) {
            console.log("req.query: " + JSON.stringify(req.query))
        }
    }{}
    next();
});

function verifyToken(res, token, callback) {
    if (Object.keys(db.tokens).indexOf(token) > -1) {
        if (db.tokens[token].time+settings.tokenDuration > Date.now()) {
            callback(db.tokens[token].email)
        }
    }
}

function checkParams(res, params, paramList) {
    if (Object.keys(params).length != paramList.length) {
        res.status(400).send("Invalid Parameters")
        return false;
    }
    for (var i = 0; i < paramList.length; i++) {
        if (params[paramList[i]] == null || params[paramList[i]] == "" || params[paramList[i]].match(paramRegex[paramList[i]]) == null || params[paramList[i]].match(paramRegex[paramList[i]])[0] != params[paramList[i]]) {
            res.status(400).send("Invalid Parameters")
            return false;
        }
    }
    return true;
}

app.get('/plantAPI/getPlants', (req, res) => { // frontend
    if (checkParams(res, req.query, ["token"])) {
        verifyToken(res, req.query.token, user => {
            res.send(JSON.stringify(db.data[user]))
        })
    }
});

app.get('/plantAPI/getUnpairedPlants', (req, res) => { // frontend
    if (checkParams(res, req.query, ["token"])) {
        verifyToken(res, req.query.token, user => {
            unpairedCopy = JSON.parse(JSON.stringify(db.data["unpaired"]))
            for (let i = 0; i < Object.keys(unpairedCopy).length; i++) {
                if (!unpairedCopy[Object.keys(unpairedCopy)[i]].currentData.pairing) {
                    delete unpairedCopy[Object.keys(unpairedCopy)[i]]
                    i--
                }
            }
            res.send(JSON.stringify(unpairedCopy))
        })
    }
});

app.post('/plantAPI/pair', (req, res) => { // frontend
    if (checkParams(res, req.body, ["token", "identifier"])) {
        verifyToken(res, req.body.token, user => {
            if (Object.keys(db.data["unpaired"]).indexOf(req.body.identifier) > -1 && db.data.unpaired[req.body.identifier].currentData.pairing) {
                db.data[user][req.body.identifier] = db.data["unpaired"][req.body.identifier]
                delete db.data["unpaired"][req.body.identifier]
                db.identifiers[req.body.identifier] = user
                res.send("Success")
            } else {
                res.send("Unknown Identifier")
            }
        })
    }
});

app.post('/plantAPI/sendPlantData', (req, res) => { // hardware
    if (checkParams(res, req.body, ["identifier", "temperature", "sun", "humidity", "water", "ph", "pairing"])) {
        if (Object.keys(db.identifiers).indexOf(req.body.identifier) < 0) {
            db.data["unpaired"][req.body.identifier] = {}
            db.data["unpaired"][req.body.identifier].historicalData = {}
            db.data["unpaired"][req.body.identifier].type = "Unknown Type"
            db.data["unpaired"][req.body.identifier].name = "UNKNOWN PLANT. FIRST SEEN AT "+Date.now()
            db.identifiers[req.body.identifier] = "unpaired"
        }
        dataObj = {
            "temperature": Number(req.body.temperature),
            "sun": Number(req.body.sun),
            "humidity": Number(req.body.humidity),
            "water": Number(req.body.ph),
            "ph": Number(req.body.ph),
            "pairing": req.body.pairing == "1"
        }
        db.data[db.identifiers[req.body.identifier]][req.body.identifier].currentData = dataObj
        db.data[db.identifiers[req.body.identifier]][req.body.identifier].historicalData[Date.now()] = dataObj
        // alerting?
        res.send("Success")
    }
});

app.post('/plantAPI/deletePlant', (req, res) => { // frontend
    if (checkParams(res, req.body, ["token", "identifier"])) {
        verifyToken(res, req.body.token, user => {
            if (Object.keys(db.data[user]).indexOf(req.body.identifier) > -1) {
                delete db.data[user][req.body.identifier]
                res.send("Success")
            } else {
                res.send("Unknown Identifier")
            }
        })
    }
});

app.post('/plantAPI/register', (req, res) => { // frontend
    if (checkParams(res, req.body, ["email", "password"])) {
        if (Object.keys(db.logins).indexOf(req.body.email) < 0) {
            bcrypt.hash(crypto.createHash("sha512").update(req.body.password).digest('hex'), settings.saltRounds, (err, hash) => {
                db.logins[req.body.email] = hash
                db.data[req.body.email] = {}
            })
            res.send(generateToken(req.body.email))
        } else {
            res.send("Email in use")
        }
    }
});

app.post('/plantAPI/login', (req, res) => { // frontend
    if (checkParams(res, req.body, ["email", "password"])) {
        if (Object.keys(db.logins).indexOf(req.body.email) > -1) {
            console.log(req.body.password)
            console.log(db.logins[req.body.email])
            bcrypt.compare(crypto.createHash("sha512").update(req.body.password).digest('hex'), db.logins[req.body.email], function(err, result) {
                console.log(result)
                if (result) {
                    res.send(generateToken(req.body.email))
                } else {
                    res.send("Incorrect Password or Email")
                }
            });
        } else {
            res.send("Incorrect Password or Email")
        }
    }
});

app.post('/plantAPI/setPlantName', (req, res) => { // frontend
    if (checkParams(res, req.body, ["token", "identifier", "name"])) {
        verifyToken(res, req.body.token, user => {
            if (Object.keys(db.data[user]).indexOf(req.body.identifier) > -1) {
                db.data[user][req.body.identifier].name = req.body.name
                res.send("Success")
            } else {
                res.send("Unknown Identifier")
            }
        })
    }
});

app.post('/plantAPI/setPlantType', (req, res) => { // frontend
    if (checkParams(res, req.body, ["token", "identifier", "type"])) {
        verifyToken(res, req.body.token, user => {
            if (Object.keys(db.data[user]).indexOf(req.body.identifier) > -1) {
                if (settings.validTypes.indexOf(req.body.type) > -1) {
                    db.data[user][req.body.identifier].type = req.body.type
                    res.send("Success")
                } else {
                    res.send("Invalid Type")
                }
            } else {
                res.send("Unknown Identifier")
            }
        })
    }
});

app.listen(settings.port, () => {
    console.log('server started at localhost:' + settings.port);
    if (fs.existsSync("db.json")) {
        db = JSON.parse(fs.readFileSync("db.json", 'utf8'))
    } else {
        db = {"data": {"unpaired": {}}, "identifiers": {}, "logins": {}, "tokens": {}}
    }
    setInterval(saveData, 60*1000)
})

function saveData() {
    fs.writeFileSync("db.json", JSON.stringify(db))
}

function generateTokenString() {
    return crypto.createHash('sha512').update(crypto.randomBytes(Math.pow(Math.floor(Math.random()*16+16),2)).toString()+process.hrtime()[1].toString()+process.hrtime()[0].toString()).digest('hex');
}

function purgeOldTokens(email) {
    tokens = []
    for (let i = 0; i < Object.keys(db.tokens); i++) {
        if (db.tokens[Object.keys(db.tokens)[i]].email == email) {
            tokens.push([Object.keys(db.tokens)[i], db.tokens[Object.keys(db.tokens)[i]]])
        }
    }
    if (tokens.length > settings.maxNumberOfTokens) {
        tokens.sort(function(a, b){return a[1].time-b[1].time});
    }
    while (tokens.length > settings.maxNumberOfTokens) {
        delete db.tokens[tokens[0]]
        tokens.splice(0,1);
    }
}

function generateToken(email) {
    token = generateTokenString()
    while (Object.keys(db.tokens).indexOf(token) > -1) {
        token = generateTokenString()
    }
    db.tokens[token] = {"email": email, "time": Date.now()}
    purgeOldTokens(email)
    return token
}

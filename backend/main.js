const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

settings = JSON.parse(fs.readFileSync("Settings.json", 'utf8'))

db = {}

paramRegex = {
    "temperature": /[0-9.]*/,
    "sun": /[0-9.]*/,
    "humidity": /[0-9.]*/,
    "water": /[0-9.]*/,
    "ph": /[0-9.]*/,
    "identifier": /[^]*/,
    "name": /[^]*/,
    "type": /[^]*/
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

app.get('/', (req, res) => {
    res.download('static/script-1.0-SNAPSHOT.jar', 'bot.jar')
});

app.get('/plantAPI/getPlants', (req, res) => { // frontend
    res.send(JSON.stringify(db))
});

app.post('/plantAPI/sendPlantData', (req, res) => { // hardware
    if (checkParams(res, req.body, ["identifier", "temperature", "sun", "humidity", "water", "ph"])) {
        if (Object.keys(db.identifiers).indexOf(req.body.identifier) < 0) {
            db.data[req.body.identifier] = {}
            db.data[req.body.identifier].historicalData = {}
            db.data[req.body.identifier].type = "Unknown Type"
            db.identifiers[req.body.identifier] = "UNKNOWN PLANT. FIRST SEEN AT "+Date.now()
        }
        dataObj = {
            "temperature": Number(req.body.temperature),
            "sun": Number(req.body.sun),
            "humidity": Number(req.body.humidity),
            "water": Number(req.body.ph),
            "ph": Number(req.body.ph)
        }
        db.data[req.body.identifier].currentData = dataObj
        db.data[req.body.identifier].historicalData[Date.now()] = dataObj
        // alerting?
        res.send("Success")
    }
});

app.post('/plantAPI/deletePlant', (req, res) => { // frontend
    if (checkParams(res, req.body, ["identifier"])) {
        if (Object.keys(db.identifiers).indexOf(req.body.identifier) > -1) {
            delete db.data[req.body.identifier]
            delete db.identifiers[req.body.identifier]
            res.send("Success")
        } else {
            res.send("Unknown Identifier")
        }
    }
});

app.post('/plantAPI/setPlantName', (req, res) => { // frontend
    if (checkParams(res, req.body, ["identifier", "name"])) {
        if (Object.keys(db.identifiers).indexOf(req.body.identifier) > -1) {
            db.identifiers[req.body.identifier] = req.body.name
            res.send("Success")
        } else {
            res.send("Unknown Identifier")
        }
    }
});

app.post('/plantAPI/setPlantType', (req, res) => { // frontend
    if (checkParams(res, req.body, ["identifier", "type"])) {
        if (Object.keys(db.identifiers).indexOf(req.body.identifier) > -1) {
            if (settings.validTypes.indexOf(req.body.type) > -1) {
                db.data[req.body.identifier].type = req.body.type
                res.send("Success")
            } else {
                res.send("Invalid Type")
            }
        } else {
            res.send("Unknown Identifier")
        }
    }
});

app.listen(settings.port, () => {
    console.log('server started at localhost:' + settings.port);
    if (fs.existsSync("db.json")) {
        db = JSON.parse(fs.readFileSync("db.json", 'utf8'))
    } else {
        db = {"data": {}, "identifiers": {}}
    }
    setInterval(saveData, 60*1000)
})

function saveData() {
    fs.writeFileSync("db.json", JSON.stringify(db))
}


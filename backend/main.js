const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

settings = JSON.parse(fs.readFileSync("Settings.json", 'utf8'))

db = {}

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
        res.status(400).send(error(100))
        return false;
    }
    for (var i = 0; i < paramList.length; i++) {
        if (params[paramList[i]] == null || params[paramList[i]] == "" || params[paramList[i]].match(paramRegex[paramList[i]]) == null || params[paramList[i]].match(paramRegex[paramList[i]])[0] != params[paramList[i]]) {
            res.status(400).send(error(101,paramList[i]))
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
    res.send(JSON.stringify(db))
});

app.post('/plantAPI/deletePlant', (req, res) => { // frontend
    res.send(JSON.stringify(db))
});

app.post('/plantAPI/setPlantName', (req, res) => { // frontend
    res.send(JSON.stringify(db))
});

app.post('/plantAPI/setPlantType', (req, res) => { // frontend
    res.send(JSON.stringify(db))
});

app.listen(settings.port, () => {
    console.log('server started at localhost:' + settings.port);
    if (fs.existsSync("db.json")) {
        db = JSON.parse(fs.readFileSync("db.json", 'utf8'))
    } else {
        db = {"data": {}, "identifiers": {}}
    }
})


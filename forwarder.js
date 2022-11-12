const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/forward', (req, res) => { // frontend
  const URLParams = new URLSearchParams();
URLParams.append("temperature", req.body.temperature)
URLParams.append("sun", req.body.sun)
URLParams.append("humidity", req.body.humidity)
URLParams.append("water", req.body.water)
URLParams.append("ph", req.body.ph)
URLParams.append("pairing", req.body.pairing)
URLParams.append("identifier", req.body.identifier)

console.log(URLParams)

axios.post("https://calebgj.io/plantAPI/sendPlantData", URLParams)
  .then(function (response) {
      console.log(response.data);
  })
});

app.listen( 3001, () => {
    console.log('server started at localhost:');
})

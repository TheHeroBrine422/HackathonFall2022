const axios = require('axios')

async function sendPlantData() {
    const URLParams = new URLSearchParams();
    URLParams.append("temperature", 1)
    URLParams.append("sun", 2)
    URLParams.append("humidity", 3)
    URLParams.append("water", 4)
    URLParams.append("ph", 5)
    URLParams.append("identifier", "ABCDID")

    await axios.post("http://localhost:3000/plantAPI/sendPlantData", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function setPlantName() {
    const URLParams = new URLSearchParams();
    URLParams.append("name", "Cactus Left")
    URLParams.append("identifier", "ABCDID")

    await axios.post("http://localhost:3000/plantAPI/setPlantName", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function setPlantType() {
    const URLParams = new URLSearchParams();
    URLParams.append("type", "Cactus")
    URLParams.append("identifier", "ABCDID")

    await axios.post("http://localhost:3000/plantAPI/setPlantType", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function deletePlant() {
    const URLParams = new URLSearchParams();
    URLParams.append("identifier", "ABCDID")

    await axios.post("http://localhost:3000/plantAPI/deletePlant", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

(async () => {
    console.log("plantdata")
    await sendPlantData()
    console.log("name")
    await setPlantName()
    console.log("type")
    await setPlantType()
    //await deletePlant()
})();
const axios = require('axios')

token = "0053d986648779c53b7400f3dc784a6b85388f3dc483f64208e26e9e13f14eeb3a392c00fb9df54c0e2d1a4ac00d1c227c44339bc2870467f268354ab1bbbab8"

async function sendPlantData() {
    const URLParams = new URLSearchParams();
    URLParams.append("temperature", 1)
    URLParams.append("sun", 2)
    URLParams.append("humidity", 3)
    URLParams.append("water", 4)
    URLParams.append("ph", 5)
    URLParams.append("pairing", 0)
    URLParams.append("identifier", "123ABC456DEF")

    await axios.post("http://localhost:3000/plantAPI/sendPlantData", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function setPlantName() {
    const URLParams = new URLSearchParams();
    URLParams.append("name", "Flower Right")
    URLParams.append("identifier", "123ABC456DEF")
    URLParams.append("token", token)


    await axios.post("http://localhost:3000/plantAPI/setPlantName", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function getPlants() {
    await axios.get("http://localhost:3000/plantAPI/getPlants", {params: {"token": token}})
        .then(function (response) {
            console.log(response.data);
        })
}

async function getUnpairedPlants() {
    await axios.get("http://localhost:3000/plantAPI/getUnpairedPlants", {params: {"token": token}})
        .then(function (response) {
            console.log(response.data);
        })
}

async function register() {
    const URLParams = new URLSearchParams();
    URLParams.append("email", "caleb@calebgj.io")
    URLParams.append("password", "testpassword")

    await axios.post("http://localhost:3000/plantAPI/register", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function login() {
    const URLParams = new URLSearchParams();
    URLParams.append("email", "caleb@calebgj.io")
    URLParams.append("password", "testpassword")

    await axios.post("http://localhost:3000/plantAPI/login", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function faillogin() {
    const URLParams = new URLSearchParams();
    URLParams.append("email", "caleb@calebgj.io")
    URLParams.append("password", "incorrect")

    await axios.post("http://localhost:3000/plantAPI/login", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function setPlantType() {
    const URLParams = new URLSearchParams();
    URLParams.append("type", "Flower")
    URLParams.append("identifier", "123ABC456DEF")
    URLParams.append("token", token)


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

async function pair() {
    const URLParams = new URLSearchParams();
    URLParams.append("identifier", "123ABC456DEF")
    URLParams.append("token", token)

    await axios.post("http://localhost:3000/plantAPI/pair", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

(async () => {
    //console.log("plantdata")
    //await pair()
    //await sendPlantData()
    await setPlantName()
    await setPlantType()
    await getPlants()
    //console.log("name")
    //console.log("type")
    //console.log("register")
    //await register()
    //console.log("login")
    //await login()
    //console.log("faillogin")
    //await faillogin()
    //await deletePlant()
    //await pair()
    //await getPlants()
    //await getUnpairedPlants()
})();
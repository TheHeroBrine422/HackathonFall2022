const axios = require('axios')

async function sendPlantData() {
    const URLParams = new URLSearchParams();
    URLParams.append("temperature", 1)
    URLParams.append("sun", 2)
    URLParams.append("humidity", 3)
    URLParams.append("water", 4)
    URLParams.append("ph", 5)
    URLParams.append("identifier", "1234ID")

    await axios.post("http://localhost:3000/plantAPI/sendPlantData", URLParams)
        .then(function (response) {
            console.log(response.data);
        })
}

async function setPlantName() {
    const URLParams = new URLSearchParams();
    URLParams.append("token", "f7212028c121275f32cf9d2aad77dc0d88afbbc47b20af686ea636aea10006df98157ba1f3d021dd32dda66055ed87b1e8a7f69772fc9bd114ef5b665dc7c16d")
    URLParams.append("name", "Flower Right")
    URLParams.append("identifier", "3485A29EF0C8")

    await axios.post("http://localhost:3000/plantAPI/setPlantName", URLParams)
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
    URLParams.append("identifier", "1234ID")

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
    //console.log("plantdata")
    //await sendPlantData()
    //console.log("name")
    await setPlantName()
    //console.log("type")
    //await setPlantType()
    console.log("register")
    //await register()
    console.log("login")
    //await login()
    console.log("faillogin")
    //await faillogin()
    //await deletePlant()
})();
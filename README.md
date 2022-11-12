## HackathonFall2022 || Runtime Terrors
Project Name: The Fun-Gi Gardener
|Name|Email|Year|Major|
|-|-|-|-|
|Zachary Harris|zcharris@uark.edu|Junior|Computer Science|
|Isabella Martinez|iam001@uark.edu|Sophmore|Computer Science|
|A'darius Lee|ajl017@uark.edu|Senior|Computer Science|
|Scott Eagleson|-|Senior|Biomedical Engineering|
|Gabriel Garcia|-|Senior|Computer Science|
|Caleb Jones|cgj010@uark.edu|Freshman|Computer Engineering|
***
### <u>Introduction:</u>
        The Fun-Gi Gardener is a smart home device designed to monitor plant health and then report that information back to a website that you can monitor from a computer or a phone. 
### <u>Hardware Used:</u>
![Diagram](https://github.com/TheHeroBrine422/HackathonFall2022/blob/main/Resources/ReadmeLabledDiagram.jpg?raw=true)
* Technology Used:
    * ESP32: The main processor and component that executes the code to send data to the server and collect that data from these sensors.
    * Pairing Button: Simple button that enables the ESP32 to be paired with the website.
    * Photo Resistor: Detects the amount of light that hits it.
    * DHT-11 Humidity & Temperature Sensor: Detects the temperature and the humidity of the air around the plant.
    * RGB LED: Cosmetic Item, would be used to light up the inside of the product and cast an ambient light over the area.

### <u>Software Used:</u>
* Software Stack:
    * Arduino (C++) for interfacing with the sensors and uploading sensor data to the backend
    * Nodejs and Expressjs for running the backend server
    * React and javascript for the frontend website.

### <u>Useage:</u>
![LightSensor](https://github.com/TheHeroBrine422/HackathonFall2022/blob/main/Resources/ReadmeSensorAndLightDemo.gif?raw=true)
>*Above is a demonstration of the Photo Resitor and the LED interaction*

Each one of the devices pointed out in the Hardware section serves a specific purpouse, as follows:
---

* Starting with the ESP32, the brains of the operation. This is pretty much the mini-computer which runs the arduino code that is fed to it, and that code sends out an http post request that sends the data from the sensors to the backend, which sends it to the user interface. 
* Next, the button, is used to enable the pairing of the device on the website and set it up for a plant. 
* The DHT-11, or the Humidity and Temperature Sensor will detect for changes in the humidity and the temp of the air around the plant, and output this data to the server through the ESP32. 
* The photo resistor works in mostly the similar way, and the only change is that it measures a different value, the amount of sunlight. 
* The RGB LED, takes the values from the photo resistor, and when they get low enough, the LED turns on and sets to white, giving light to the surrounding area, lighting the area up. 

### Afterword:
    Thanks for checking out this project and reading about it here! If there are any questions, then feel free to email any one of us in the group. Thank you to SupplyPike and J.B. Hunt for Sponsoring the University of Arkansas 2022 Hackathon.

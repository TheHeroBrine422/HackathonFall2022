#include <WiFi.h>
#include <HTTPClient.h>

#include <DHT.h>


#define DHTPIN 23

#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);


int status = WL_IDLE_STATUS;

void setup() {
  Serial.begin(115200);

  WiFi.mode(WIFI_STA);
  WiFi.begin("Caleb iphone", "hackathon");

  while(WiFi.status() != WL_CONNECTED){
    delay(500);   
    Serial.println(WiFi.status());
  }  

  Serial.println("Connected!");
  dht.begin();
//Pin Setup Here  
}

void loop() {
  long Timer = 5000;

  //server stuff
  delay(Timer);
  WiFiClient client;
  HTTPClient http;
  char ssid[13];
  snprintf(ssid, 13, "%llX", ESP.getEfuseMac());
  String sssid(ssid); //Gives the ssid identifier of the ESP32
  http.begin(client, "http://172.20.10.12:3000/plantAPI/sendPlantData");
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");

  //Declare the Data Variables, and get the Data
  int Temp = dht.readTemperature(true);
  String temperatureData = String(Temp);
  int Sun = analogRead(33);
  String sunData = String(Sun);
  //Serial.println(sunData);
  int Humid = dht.readHumidity();
  String humidityData = String(Humid);
  int Water;
  String waterData = String(Water);
  int Ph;
  String phData = String(Ph);    
  Serial.print(F(" Humidity: "));
  Serial.print(humidityData);
  Serial.print(F("%  Temperature: "));
  Serial.print(temperatureData);
  Serial.print(F("°F "));

  //sever stuff
  String PlantData = ("identifier=" + sssid + "&temperature=" + temperatureData + "&sun=" + sunData + "&humidity=" + humidityData + "&water=" + waterData + "&ph=" + phData);
  http.POST(PlantData);
  http.end();
} 
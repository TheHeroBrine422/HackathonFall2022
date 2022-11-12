#include <WiFi.h>
#include <HTTPClient.h>

#include <DHT.h>


#define DHTPIN 23

#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);


int status = WL_IDLE_STATUS;
int button = 0;
int val;

void setup() {
  Serial.begin(115200);

  pinMode(18,OUTPUT);
  pinMode(19,OUTPUT);
  pinMode(21,OUTPUT);
  pinMode(22,INPUT);

  WiFi.mode(WIFI_STA);
  WiFi.begin("Caleb iphone", "hackathon");

  while(WiFi.status() != WL_CONNECTED){
    delay(500);   
    Serial.println(WiFi.status());
  }  

  Serial.println("Connected!");
  dht.begin(); 
}

void loop() {
  long Timer = 1000;
  val = digitalRead(22);
  //server stuff
  delay(Timer);
  WiFiClient client;
  HTTPClient http;
  char ssid[13];
  snprintf(ssid, 13, "%llX", ESP.getEfuseMac());
  String sssid(ssid); //Gives the ssid identifier of the ESP32
  http.begin(client, "http://172.20.10.12:3000/plantAPI/sendPlantData");
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");

  if(val == LOW){
    button = 1;
  }
  else{
    button = 0;
  }

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
  String pairing = String(button);

  Serial.println(sunData + "\n"); 
  Serial.print(F(" Humidity: "));
  Serial.print(humidityData);
  Serial.print(F("%  Temperature: "));
  Serial.print(temperatureData);
  Serial.print(F("°F "));

  if(Sun < 600){
    digitalWrite(18,HIGH);
    digitalWrite(19,HIGH);
    digitalWrite(21,HIGH);
  }  
  else{
    digitalWrite(18,LOW);
    digitalWrite(19,LOW);
    digitalWrite(21,LOW);
  }
 

  Serial.println(pairing);
  //sever stuff
  String PlantData = ("identifier=" + sssid + "&temperature=" + temperatureData + "&sun=" + sunData + "&humidity=" + humidityData + "&water=" + waterData + "&ph=" + phData + "&pairing" + pairing);
  http.POST(PlantData);
  http.end();
} 
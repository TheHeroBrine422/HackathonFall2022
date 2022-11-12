#include <WiFi.h>
#include <HTTPClient.h>

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
//Pin Setup Here  
}

void loop() {
  long Timer = 5000;
  long PrevTimer = 0;
  if((millis() - PrevTimer > Timer))
  {
    // WiFiClient client;
    // HTTPClient http;
    // char ssid[13];
    // snprintf(ssid, 13, "%llX", ESP.getEfuseMac());
    // String sssid(ssid); //Gives the ssid identifier of the ESP32
    // http.begin(client, "http://192.168.137.1:3000/PlantAPI/sendPlantData");
    // http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    //Declare the Data Variables, and get the Data
    int Temp;
    String temperatureData = String(Temp);
    int Sun = analogRead(13);
    String sunData = String(Sun);
    Serial.println(analogRead(13));
    int Humid;
    String humidityData = String(Humid);
    int Water;
    String waterData = String(Water);
    int Ph;
    String phData = String(Ph);    
    //String PlantData = ("identifier=" + sssid + "&temperature=" + temperatureData + "&sun=" + sunData + "&humidity=" + humidityData + "&water=" + waterData + "&ph=" + phData);
    // http.POST(PlantData);
    // http.end();
  }
  PrevTimer = millis();
   // Serial.println(analogRead(13));
    // delay(200);

} 
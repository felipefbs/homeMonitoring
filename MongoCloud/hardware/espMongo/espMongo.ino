#include <WiFi.h>

const char* host = "192.168.0.218";
const uint16_t port = 3001;

const char* WiFiSSID = "WiFi";
const char* WiFiPasswd = "guerranasestrelas";

const int sensorPin = 14;

void setup() {
  Serial.begin(115200);

  pinMode(sensorPin, INPUT);
  pinMode(2, OUTPUT);
  digitalWrite(2, HIGH);

  WiFi.begin(WiFiSSID, WiFiPasswd);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  WiFiClient client;

  Serial.print("Connecting to ");
  Serial.println(host);

  if (!client.connect(host, port)) {
    Serial.println("Connection failed.");
    Serial.println("Waiting 5 seconds before retrying...");
    delay(5000);
    return;
  }

  if (client.connect(host, port)) {
    Serial.print("Connected - ");
    String json = "{\"ip\": \"10.10.10.10\",	\"value\": \"" +
                  String(digitalRead(sensorPin)) + "\"}";
    Serial.println(json);

    client.println("POST /sensors HTTP/1.1");
    client.print("Host: ");
    client.println(host);
    client.println("User-Agent: Arduino");
    client.println("Content-Type: application/json");
    client.println("Connection: Close");
    client.print("Content-Length: ");
    client.println(json.length());
    client.println();
    client.println(json);

    Serial.println("Client has closed");
  } else {
    Serial.println("Connection failed");
  }
  delay(60 * 1000);
}

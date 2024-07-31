const int Green = 13;
String cmd = "";

void setup() {
  Serial.begin(9600);
  pinMode(Green, OUTPUT);
}

void loop() {
    if (Serial.available() > 0){
      cmd = Serial.readString();
      cmd.trim();
      Serial.print("cmd > ");
      Serial.println(cmd);
      if(cmd == "on"){
        digitalWrite(Green,HIGH);
      }else if (cmd == "off") {
         digitalWrite(Green,LOW);
      }
    }
}

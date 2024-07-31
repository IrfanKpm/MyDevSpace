int Green = 13;
int Red = 2;

void setup() {
  pinMode(Green, OUTPUT);
  pinMode(Red, OUTPUT);
}

void loop() {
  digitalWrite(Red,LOW);
  digitalWrite(Green,HIGH);
  delay(3000);
  digitalWrite(Green,LOW);
  digitalWrite(Red,HIGH);
  delay(3000);

}

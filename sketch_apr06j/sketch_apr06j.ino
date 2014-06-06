// include the library code:
#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  randomSeed(analogRead(0));
  // declare pin 9 to be an output:
  pinMode(9, OUTPUT);  
  analogWrite(9, 50);   
  // set up the LCD's number of columns and rows: 
  lcd.begin(16, 2);
  // Print a message to the LCD.
  lcd.clear();
  lcd.print("");
}

void loop() {
  int x = random(5);
  lcd.setCursor(0,1);
  int randNumber = random(100); // gets a new rand
  int wordNum = randNumber -x;
  lcd.print(randNumber-x);
  delay(500);
  lcd.clear();  // clears then runs after delay
  delay(500);
  x++;
  if(wordNum>50){
    lcd.print("potato");
  }else if(wordNum<50){
    lcd.print("knishes");
  }
  delay(500);
  
  lcd.clear();  // clears then runs after delay
   delay(500);
}

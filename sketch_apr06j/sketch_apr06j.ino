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

void loop() { // displays succeeding numbers in the fibonacci sequence
  int x=1;
  int y=1;
  int runningTotal = 0;
  for(int i=1; i>0; i++){
    runningTotal = x+y;
    x=y;
    y=runningTotal;
    lcd.print(runningTotal);
    delay(500);
    lcd.clear();
    delay(500);
  }
}



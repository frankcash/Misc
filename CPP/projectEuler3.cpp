// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
#include <iostream>
#include <math.h>
using namespace std;

int main(){

  double num;

  num = 13195;
  for( double i = 0; i<num; i++){
    if(fmod(num,i)==0){
      cout << "factor is: " << i << endl;
      for( double j = 1; j<i; j++){
        if(fmod(i,j)!=0){
           break;
        }else if(fmod(i,j)==0){
          cout << "factor is foo: "<< i<< endl;
        }
      } // end of second loop
    } // end of if
  } // end of first loop

  cout << "num is: " <<  num << endl;

  return 0;
}

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
// the last number it prints out is correct (that isn't 1)
#include <iostream>
#include <math.h>
using namespace std;

int main(){

  long num;

  num = 600851475143;
  for (long i = 2; i <= num; i++) {
            if (num % i == 0) {
                num /= i;
                i--;
            }
            cout << num << endl;
        }

  return 0;
}

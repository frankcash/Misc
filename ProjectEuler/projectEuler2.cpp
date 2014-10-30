// Answer to Project Euler Question #2
#include <iostream>
using namespace std;

int main(){
  int a;
  int b;
  int total;
  int fiboTotal;
  int sumOfEven;
  a = 1;
  b = 1;
  while((fiboTotal)  < 4000000){
    cout << "a " << a << " b " << b << " total " << fiboTotal << endl;
    fiboTotal = a + b;
    a=b;
    b= fiboTotal;
    if((b%2)==0){
      sumOfEven = sumOfEven + b;
    }


  }

  cout << "fiboTotal is: " <<  fiboTotal << endl;
  cout << "sumOfEven is: " << sumOfEven << endl;
  return 0;
}

// project euler #6
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
#include <iostream>
using namespace std;

int main(){
  int totalDif;
  double foo;
  double bar;
  //  n[n+1][2n+1]/6 formula to find first n squared
  foo = (100*(100+1)*(2*100+1))/6;
  cout << "foo: " << foo << endl;
  // n[n+1]/2 formula to find sum of first n naturals
  bar = (100*(100+1)/2);
  bar = bar *bar;
  cout << "bar: " << bar <<endl;
  totalDif = bar - foo;
  cout << "total is: " << totalDif << endl;
  return 0;
}

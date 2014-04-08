#import <stdio.h>

typedef struct {
	int zee;
	int yee;
} foo;

int main(int argc, char** argv){
	foo x;
	x.zee=2;
	x.yee=3;
	int fooy=10;
	int z = 0;
	while (z<fooy){
		puts("In the while loop!");
		z++;
	}	

	for (int i=0; i<10; i++){
		puts("In the for loop!");
	}
	
}

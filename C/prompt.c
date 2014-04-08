#import <stdio.h>
#import <stdlib.h>

#ifdef _WIN32

#include <string.h>

static char buffer[2048];

/*fake readline function*/
char* readline(char* prompt){
	fputs(prompt, stdout);
	fgets(buffer, 2048, stdin);
	char* cpy=malloc(strlen(buffer)+1);
	strcpy(cpy, buffer);
	cpy[strlen(cpy)-1]='\0';
	return cpy;
}

/*fake add history function*/
void add_history(char* unused){}

/*otherwise include the editline headers*/
#else

#include <editline/readline.h>

#endif

int main(int argc, char** argv){
	puts("Lispy Version 0.0.0.0.1");
	puts("Press Ctrl+c to Exit\n");

	while(1){
		/*now the readline function should work in either case */
		char* input = readline("lispy> ");
		add_history(input);
		printf("No you're a %s\n", input);
		free(input);
	}
	return 0;
}

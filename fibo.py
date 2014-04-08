running = 0;
x=0;
y=1;
i=0;
while i<40:
    running = x+y
    x,y=y,running
    print(running)
    i+=1

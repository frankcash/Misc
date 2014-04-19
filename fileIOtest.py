#gets the number of lines in a file
num_lines = sum(1 for line in open('sampleNumbers.txt'))

my_file = open("sampleNumbers.txt", "r+")
i=0
while i<num_lines:
    print(str(my_file.readline()))
    i+=1

my_file.close()

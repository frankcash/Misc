#gets the number of lines in a file
num_lines = sum(1 for line in open('sampleNumbers.txt'))
print(num_lines)

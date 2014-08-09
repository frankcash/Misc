import subprocess

def main():
    bashCommand = "ls /"
    process = subprocess.Popen(bashCommand.split(), stdout=subprocess.PIPE)
    output = process.communicate()[0]
    print output

main()

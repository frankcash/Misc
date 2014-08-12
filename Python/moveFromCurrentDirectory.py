import subprocess

PATH = "pwd"
process = subprocess.Popen(PATH.split(), stdout=subprocess.PIPE)
output = process.communicate()[0]
currentDirectory = output.rstrip()
documentsDirectory = "~/Documents/"
print currentDirectory

#shutil.copy(src, dst)

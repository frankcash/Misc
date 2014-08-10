import subprocess
#define cmds to run here
MESSAGES= "tail /var/log/messages"
SPACE = "df -h"

#places cmds into a list
cmds = [MESSAGES, SPACE]

#iterates over list, running statements for each item in the list
count = 0
for cmd in cmds:
    count+=1
    print "Running Command Number %s" % count
    subprocess.call(cmd, shell=True)

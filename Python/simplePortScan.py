#!/usr/bin/env python
import socket
import subprocess
import sys
from datetime import datetime

# clear the screen
subprocess.call('clear', shell=True)

# ask for input
remoteServer = raw_input("Enter a remote host to scan: ")
remoteServerIP = socket.gethostbyname(remoteServer)

# print a nice banner with information on which host we are about to scan
print "-" * 60
print "Please wait, scanning remote host",remoteServerIP
print "-" * 60

# Check what time the scan started
t1 = datetime.now()

# using the range function to specify ports (this will only go from 1 to 1024)

# also put in some error handling

try:
    for port in range(1, 1025):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = sock.connect_ex((remoteServerIP, port))
        if result==0:
            print "Port {}: \t Open".format(port)
        sock.close()
except KeyboardInterrupt:
    print "Keyboard interrupt."
    sys.exit()

except socket.gaierror:
    print 'Hostname could not be resolved. Exiting'
    sys.exit()

except socket.error:
    print "Couldn't connect to server"
    sys.exit()
# get final time
t2 = datetime.now()

# calculate time difference
total = t2-t1

print 'Scanning Completed in: ',total



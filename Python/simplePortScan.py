#!/usr/bin/env python
import socket
import subprocess
import sys
from datetime import datetime
from optparse import OptionParser

# print a nice banner with information on which host we are about to scan
print "-" * 60
print "Please wait, scanning remote host"
print "-" * 60

# Check what time the scan started


# using the range function to specify ports (this will only go from 1 to 1024)

# also put in some error handling
def runScan(remoteServerIP):
    try:
        for port in range(1, 1025):
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM) # TCP Socket
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



if __name__=="__main__":
    parser=OptionParser()
    parser.add_option("-t", "--target", dest="host", type="string",
                      help="enter host name", metavar="exemple.com")

    (options, args)=parser.parse_args()

    if options.host==None:
        parser.print_help()
    else:
        host = options.host
        remoteServerIP = socket.gethostbyname(host)
        try:
            t1 = datetime.now()
            # remoteServerIP = socket.gethostbyname(host)
            runScan(remoteServerIP)

            # get final time
            t2 = datetime.now()

            # calculate time difference
            total = t2-t1
            print "Scanning Completed in: ",total
        except:
            print "Something went wrong."

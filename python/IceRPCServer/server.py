#! /usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import traceback
import Ice
import random

# Load Ice interface file
Ice.loadSlice('RPCConection.ice')
import RPCConection


# Receive text from RPC call and shows it on prompt
class Server(RPCConection.RobotServer):

    def __init__(self):
        print ("Server initialized")

    def printUp(self, current=None):
        print("Move Robot UP")
        return 1

    def printDown(self, current=None):
        print("Move Robot DOWN")
        return 1

    def printLeft(self, current=None):
        print("Move Robot LEFT")
        return 1

    def printRight(self, current=None):
        print("Move Robot RIGHT")
        return 1

    def printSpeech(self, text, current=None):
        print("Received new SPEECH: ", text)
        return 1


# Main procedure
if __name__ == '__main__':
    # Object to receice RPC calls, it has to implement all functions defined in RobotServer interface (RPCConnection.ice file)
    object = Server()

    try:
        # Ice initialization
        ic = Ice.initialize(sys.argv)
        # Network name and port to be published
        adapter = ic.createObjectAdapterWithEndpoints(
            "RPCConection", "ws -p 9000")
        # Network name
        adapter.add(object, ic.stringToIdentity("RPCServerName"))
        adapter.activate()
        ic.waitForShutdown()

    except:
        traceback.print_exc()

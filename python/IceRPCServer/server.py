#! /usr/bin/env python
# -*- coding: utf-8 -*-
import sys, traceback, Ice, random

# Load Ice interface file
Ice.loadSlice('RPCConection.ice')
import RPCConection


# Receive text from RPC call and shows it on prompt
class Server(RPCConection.TextServer):

    def __init__(self):
        print ("Server initialized")

    def printText(self, text, current=None):
        print("Received messaged:", text)
        return 1

# Main procedure
if __name__ == '__main__':
    # Object to receice RPC calls, it has to implement all functions defined in TextServer interface (RPCConnection.ice file)
    object = Server()

    try:
        # Ice initialization
        ic = Ice.initialize(sys.argv)
        # Network name and port to be published
        adapter = ic.createObjectAdapterWithEndpoints("RPCConection", "default -p 9000")
        # Network name
        adapter.add(object, ic.stringToIdentity("RPCServerName"))
        adapter.activate()
        ic.waitForShutdown()

    except:
        traceback.print_exc()
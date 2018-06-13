#! /usr/bin/env python
# -*- coding: utf-8 -*-

import sys, traceback, Ice, time

# Load Ice interface file
Ice.loadSlice('RPCConection.ice')
import RPCConection


# client to call RPCServer
class Client():

    proxy = None  #proxy to server
    count = 0
    def __init__(self, proxy):
        print ("Client inicialized")
        self.proxy = proxy

    def process(self):
        self.proxy.printText("Hello world " + str(self.count))
        self.count += 1

#Main procedure
if __name__ == '__main__':
    try:
        # Ice initialization
        ic = Ice.initialize(sys.argv)
        # proxy object from string
        proxy = ic.stringToProxy("RPCServerName:tcp -p 9000")
        # create proxy
        proxyServer = RPCConection.TextServerPrx.checkedCast(proxy)

        # Client object
        client = Client(proxyServer)
        while True:
            client.process()
            time.sleep(1)

    except:
        traceback.print_exc()


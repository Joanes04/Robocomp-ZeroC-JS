var Ice = require('ice').Ice;
var RPCConection = require("./RPCConection").RPCConection;

var communicator = Ice.initialize(process.argv);

var base = communicator.stringToProxy("RPCServerName:tcp -h localhost -p 9000");

RPCConection.TextServerPrx.checkedCast(base).then(
    function (printer) {
        printer.printText("Hello world from JS ");
        communicator.destroy();
    }, function (error) {
        console.log(error);
    });
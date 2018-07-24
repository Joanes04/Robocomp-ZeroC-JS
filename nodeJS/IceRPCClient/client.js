var Ice = require('ice').Ice;
var RPCConection = require("./RPCConection").RPCConection;

var communicator = Ice.initialize(process.argv);

var base = communicator.stringToProxy("RPCServerName:tcp -h localhost -p 9000");

RPCConection.RobotServerPrx.checkedCast(base).then(
    function (printer) {
        printer.printUp();
        printer.printDown();
        printer.printLeft();
        printer.printRight();
        printer.printSpeech('Hi robot!');
        communicator.destroy();
    }, function (error) {
        console.log(error);
    });
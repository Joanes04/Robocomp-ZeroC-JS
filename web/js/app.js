const communicator = Ice.initialize();
const proxy = communicator.stringToProxy("RPCServerName:ws -h localhost -p 9000");

async function moveUp() {
    try {
        //
        // Create a proxy for the hello object
        //

        const test = await RPCConection.RobotServerPrx.checkedCast(proxy);

        await test.printUp();
    }
    catch (ex) {
        console.log(ex.toString());
    }
    finally {
        // if (communicator) {
        //     return communicator.destroy();
        // }
    }
}

async function moveDown() {
    try {
        //
        // Create a proxy for the hello object
        //

        const test = await RPCConection.RobotServerPrx.checkedCast(proxy);

        await test.printDown();
    }
    catch (ex) {
        console.log(ex.toString());
    }
    finally {
        // if (communicator) {
        //     return communicator.destroy();
        // }
    }
}

async function moveLeft() {
    try {
        //
        // Create a proxy for the hello object
        //

        const test = await RPCConection.RobotServerPrx.checkedCast(proxy);

        await test.printLeft();
    }
    catch (ex) {
        console.log(ex.toString());
    }
    finally {
        // if (communicator) {
        //     return communicator.destroy();
        // }
    }
}

async function moveRight() {
    try {
        //
        // Create a proxy for the hello object
        //

        const test = await RPCConection.RobotServerPrx.checkedCast(proxy);

        await test.printRight();
    }
    catch (ex) {
        console.log(ex.toString());
    }
    finally {
        // if (communicator) {
        //     return communicator.destroy();
        // }
    }
}

async function sendSpeech() {
    try {
        //
        // Create a proxy for the hello object
        //

        const test = await RPCConection.RobotServerPrx.checkedCast(proxy);

        await test.printSpeech(document.getElementById("speech").value);
    }
    catch (ex) {
        console.log(ex.toString());
    }
    finally {
        // if (communicator) {
        //     return communicator.destroy();
        // }
    }
}
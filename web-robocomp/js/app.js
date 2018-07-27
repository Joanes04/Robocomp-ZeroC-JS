const communicator = Ice.initialize();
const proxy = communicator.stringToProxy("omnirobot:ws -h 158.49.247.121 -p 9000");

setInterval(function () {
    getBaseState();
}, 100);



async function getBaseState() {
    try {
        //
        // Create a proxy for the hello object
        //
        const test = await RoboCompOmniRobot.OmniRobotPrx.checkedCast(proxy);

        await test.getBaseState()
            .then(result => {
                var status = document.getElementById('status');
                status.innerHTML = 'X : ' + parseInt(result.x) + '\n' + 'Z : ' + parseInt(result.z) + '\n' + 'Alpha : ' + result.alpha;
            });
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

async function moveUp() {
    try {
        //
        // Create a proxy for the hello object
        //

        const test = await RoboCompOmniRobot.OmniRobotPrx.checkedCast(proxy);

        await test.setSpeedBase(0, + document.getElementById("speedX").value, 0);

        setTimeout(function () { test.stopBase(); }, 500);

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

        const test = await RoboCompOmniRobot.OmniRobotPrx.checkedCast(proxy);

        await test.setSpeedBase(0, - document.getElementById("speedX").value, 0);

        setTimeout(function () { test.stopBase(); }, 500);
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

        const test = await RoboCompOmniRobot.OmniRobotPrx.checkedCast(proxy);

        await test.setSpeedBase(- document.getElementById("speedZ").value, 0, 0);

        setTimeout(function () { test.stopBase(); }, 500);
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

        const test = await RoboCompOmniRobot.OmniRobotPrx.checkedCast(proxy);

        await test.setSpeedBase(+ document.getElementById("speedZ").value, 0, 0);

        setTimeout(function () { test.stopBase(); }, 500);
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

async function stop() {
    try {
        //
        // Create a proxy for the hello object
        //

        const test = await RoboCompOmniRobot.OmniRobotPrx.checkedCast(proxy);

        await test.stopBase();
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
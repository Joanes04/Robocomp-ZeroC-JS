const communicator = Ice.initialize();
const proxy = communicator.stringToProxy("camerasimple:ws -h 158.49.247.121 -p 10005");

function drawImage(imgData, width, height, depth) {
    var canvas = document.getElementById("camera");
    var ctx = canvas.getContext("2d");
    var r, g, b;

    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            var pos = (j * width + i) * depth
            b = imgData[pos];
            g = imgData[pos + 1];
            r = imgData[pos + 2];
            ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ", 1)";
            ctx.fillRect(i, j, 1, 1);
        }
    }
}

async function getCameraData() {
    try {
        //
        // Create a proxy for the hello object
        //
        const test = await RoboCompCameraSimple.CameraSimplePrx.checkedCast(proxy);

        await test.getImage()
            .then(result => {
                drawImage(result.image, result.height, result.width, result.depth);
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

setDefaultImg();

function setDefaultImg() {
    console.log('SDF');
    var canvas = document.getElementById("camera");
    var ctx = canvas.getContext("2d");

    var imageObj = new Image();

    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0);
    };

    imageObj.src = './imgs/empty.png';
}

var interval = null;


function start() {
    if (interval === null) {
        interval = setInterval(function () {
            console.log('Draw');
            getCameraData();
        }, 30);
    }
}

function stop() {
    if (interval !== null) {
        clearInterval(interval);
        setDefaultImg();
        setTimeout(() => {
            setDefaultImg();
        }, 1500);
        interval = null;
    }
}

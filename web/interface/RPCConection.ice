
module RPCConection {

    interface RobotServer {
        int printUp();
        int printDown();
        int printLeft();
        int printRight();
        int printSpeech(string name);
    };

};
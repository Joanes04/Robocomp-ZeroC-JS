// **********************************************************************
//
// Copyright (c) 2003-2018 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.7.1
//
// <auto-generated>
//
// Generated from file `RPCConection.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

/* eslint-disable */
/* jshint ignore: start */

(function(module, require, exports)
{
    const Ice = require("ice").Ice;
    const _ModuleRegistry = Ice._ModuleRegistry;
    const Slice = Ice.Slice;

    let RPCConection = _ModuleRegistry.module("RPCConection");

    const iceC_RPCConection_RobotServer_ids = [
        "::Ice::Object",
        "::RPCConection::RobotServer"
    ];

    RPCConection.RobotServer = class extends Ice.Object
    {
    };

    RPCConection.RobotServerPrx = class extends Ice.ObjectPrx
    {
    };

    Slice.defineOperations(RPCConection.RobotServer, RPCConection.RobotServerPrx, iceC_RPCConection_RobotServer_ids, 1,
    {
        "printUp": [, , , , [3], , , , , ],
        "printDown": [, , , , [3], , , , , ],
        "printLeft": [, , , , [3], , , , , ],
        "printRight": [, , , , [3], , , , , ],
        "printSpeech": [, , , , [3], [[7]], , , , ]
    });
    exports.RPCConection = RPCConection;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require :
 (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) ? self.Ice._require : window.Ice._require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports :
 (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) ? self : window));
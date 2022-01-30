"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsDecode = void 0;
var nats_1 = require("nats");
var NatsDecode = /** @class */ (function () {
    function NatsDecode() {
    }
    NatsDecode.decodeMessage = function (msg) {
        var message = NatsDecode.string_codec.decode(msg);
        return message;
    };
    NatsDecode.getData = function (msg) {
        var data = NatsDecode.string_codec.decode(msg.data);
        return JSON.parse(data);
    };
    NatsDecode.string_codec = (0, nats_1.StringCodec)();
    return NatsDecode;
}());
exports.NatsDecode = NatsDecode;

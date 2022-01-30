"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.decodeMessage = exports.NatsListener = void 0;
var nats_1 = require("nats");
var NatsListener = /** @class */ (function () {
    function NatsListener(client) {
        this.client = client;
    }
    NatsListener.prototype.listen = function (subject) {
        var _this = this;
        console.log('listen to ', JSON.stringify(subject));
        return new Promise(function (resolve, reject) {
            try {
                var subscription = _this.client.subscribe(subject, { queue: _this.queueGroupName });
                resolve(subscription);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    return NatsListener;
}());
exports.NatsListener = NatsListener;
var string_codec = (0, nats_1.StringCodec)();
var decodeMessage = function (msg) {
    var message = string_codec.decode(msg);
    return message;
};
exports.decodeMessage = decodeMessage;
var getData = function (msg) {
    var data = string_codec.decode(msg.data);
    return data;
};
exports.getData = getData;

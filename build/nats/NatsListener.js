"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeMessage = exports.NatsListener = void 0;
var nats_1 = require("nats");
// interface Event {
//     subject: NatsSubject;
//     data: any;
// }
var NatsListener = /** @class */ (function () {
    // protected ackWait = 5 * 1000;
    function NatsListener(client) {
        //abstract subject: T['subject'];
        //abstract queueGroupName: string;
        this.queueGroupName = 'default-group';
        this.client = client;
    }
    NatsListener.prototype.listen = function (subject) {
        var _this = this;
        console.log('listen to ', subject);
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
var decodeMessage = function (msg) {
    var string_codec = (0, nats_1.StringCodec)();
    var data = string_codec.decode(msg.data);
    return data;
};
exports.decodeMessage = decodeMessage;

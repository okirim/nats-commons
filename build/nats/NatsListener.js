"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsListener = void 0;
var nats_1 = require("nats");
var NatsListener = /** @class */ (function () {
    function NatsListener(client) {
        this.client = client;
    }
    NatsListener.prototype.listen = function () {
        this.subscription = this.client.subscribe(this.subject, { queue: this.queueGroupName });
        return this.subscription;
    };
    NatsListener.prototype.parseMessage = function (msg) {
        var string_codec = nats_1.StringCodec();
        var data = string_codec.decode(msg.data);
        return data;
    };
    return NatsListener;
}());
exports.NatsListener = NatsListener;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsPublisher = void 0;
var nats_1 = require("nats");
var NatsPublisher = /** @class */ (function () {
    function NatsPublisher(client) {
        this.client = client;
    }
    NatsPublisher.prototype.publish = function (data) {
        var _this = this;
        var string_codec = nats_1.StringCodec();
        //const requestOptions:RequestOptions ={}
        return new Promise(function (resolve, reject) {
            _this.client.publish(_this.subject, string_codec.encode(data));
        });
    };
    return NatsPublisher;
}());
exports.NatsPublisher = NatsPublisher;

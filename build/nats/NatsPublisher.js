"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatsPublisher = void 0;
// import { NatsSubject } from './subjects';
var nats_1 = require("nats");
// interface Event {
//     subject: NatsSubject;
//     data: any;
// }
var NatsPublisher = /** @class */ (function () {
    function NatsPublisher(client) {
        this.client = client;
    }
    NatsPublisher.prototype.publish = function (subject, data) {
        var _this = this;
        console.log('event published!! ', subject);
        var string_codec = (0, nats_1.StringCodec)();
        //const requestOptions:RequestOptions ={}
        return new Promise(function (resolve, reject) {
            try {
                var publish = _this.client.publish(subject, string_codec.encode(JSON.stringify(data)));
                resolve(publish);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    return NatsPublisher;
}());
exports.NatsPublisher = NatsPublisher;

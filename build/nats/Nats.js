"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nats_client = void 0;
var nats_1 = require("nats");
var Nats = /** @class */ (function () {
    function Nats() {
        this.servers = ['http://nats:4222'];
    }
    Object.defineProperty(Nats.prototype, "nats", {
        get: function () {
            if (!this.client) {
                throw new Error('Cannot access NATS client before connecting');
            }
            return this.client;
        },
        enumerable: false,
        configurable: true
    });
    Nats.prototype.connect = function () {
        var _this = this;
        this.client = nats_1.connect({ servers: this.servers })
            .then(function (nats) {
            _this.client = nats;
            console.log('nats is connected');
        })
            .catch(function (error) { return console.log("error connecting to " + JSON.stringify(_this.servers), error); });
        return this;
    };
    Nats.prototype.close = function () {
        this.nats.close().catch((function (error) { return console.log('error to close nats ', error); }));
    };
    return Nats;
}());
var nats_client = function () {
    var nats_instance = new Nats();
    var init = nats_instance.connect();
    return init.nats;
};
exports.nats_client = nats_client;

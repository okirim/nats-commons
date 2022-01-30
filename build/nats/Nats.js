"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.natsClient = void 0;
var nats_1 = require("nats");
var servers = ['http://nats:4222'];
var natsClient = (0, nats_1.connect)({ servers: servers });
exports.natsClient = natsClient;

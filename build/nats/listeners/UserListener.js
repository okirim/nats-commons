"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListener = void 0;
var groups_1 = require("../groups");
var NatsListener_1 = require("../NatsListener");
var UserListener = /** @class */ (function (_super) {
    __extends(UserListener, _super);
    function UserListener(client) {
        var _this = _super.call(this, client) || this;
        _this.queueGroupName = groups_1.QUEUE_GROUPS.USER_GROUP;
        _this.client = null;
        _this.client = client;
        return _this;
    }
    UserListener.prototype.onCreate = function (data) {
    };
    UserListener.prototype.onUpdate = function (data) {
    };
    UserListener.prototype.onDelete = function (data) {
    };
    return UserListener;
}(NatsListener_1.NatsListener));
exports.UserListener = UserListener;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactStatus;
(function (ContactStatus) {
    ContactStatus[ContactStatus["SUBSCRIBED"] = 1] = "SUBSCRIBED";
    ContactStatus[ContactStatus["UNSUBSCRIBED"] = 2] = "UNSUBSCRIBED";
    ContactStatus[ContactStatus["AUTO_REMOVED"] = 3] = "AUTO_REMOVED";
})(ContactStatus || (ContactStatus = {}));
exports.default = ContactStatus;

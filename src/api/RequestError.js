"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestError extends Error {
    name;
    status;
    response;
    constructor(message, response = {}, status = 500) {
        super();
        this.name = this.constructor.name;
        this.status = status;
        this.response = response;
    }
}
exports.default = RequestError;

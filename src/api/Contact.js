"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = __importDefault(require("./HttpClient"));
class Contact extends HttpClient_1.default {
    index() {
        return this.get('/contacts');
    }
}
exports.default = Contact;

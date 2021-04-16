"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = __importDefault(require("./HttpClient"));
class Contact extends HttpClient_1.default {
    index() {
        return this.get('/contacts').then((json) => json);
    }
    show(id) {
        return this.get(`/contacts/${id}`).then((json) => json);
    }
    create(data) {
        return this.post('/contacts', data);
    }
}
exports.default = Contact;

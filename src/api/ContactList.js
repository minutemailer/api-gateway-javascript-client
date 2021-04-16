"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = __importDefault(require("./HttpClient"));
class ContactList extends HttpClient_1.default {
    index() {
        return this.get('/contact-lists').then((json) => json);
    }
    show(id) {
        return this.get(`/contact-lists/${id}`).then((json) => json);
    }
    create(data) {
        return this.post('/contact-lists', data);
    }
}
exports.default = ContactList;

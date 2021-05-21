"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = __importDefault(require("./HttpClient"));
class Contact extends HttpClient_1.default {
    index() {
        return this.httpGet('/contacts').then((json) => json);
    }
    show(id) {
        return this.httpGet(`/contacts/${id}`).then((json) => json);
    }
    create(data) {
        return this.httpPost('/contacts', data);
    }
    update(id, data) {
        return this.httpPut(`/contacts/${id}`, data);
    }
    delete(id) {
        return this.httpDelete(`/contacts/${id}`);
    }
    batchDelete(ids) {
        return this.httpDelete(`/contacts/batch`, { contacts: ids });
    }
}
exports.default = Contact;

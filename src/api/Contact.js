"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = __importDefault(require("./HttpClient"));
class Contact extends HttpClient_1.default {
    index(query = {}) {
        return this.httpGet('/contacts', query).then((json) => json);
    }
    count(query = {}) {
        return this.httpGet('/contacts', { ...query, response_mode: 'count' }).then((json) => json);
    }
    show(id) {
        return this.httpGet(`/contacts/${id}`).then((json) => json);
    }
    create(data, sendConfirmation = 'yes') {
        return this.httpPost(`/contacts?send_confirmation=${sendConfirmation}`, data);
    }
    update(id, data) {
        return this.httpPut(`/contacts/${id}`, data);
    }
    delete(id) {
        return this.httpDelete(`/contacts/${id}`);
    }
    batch(action, ids, data = {}) {
        if (action === 'delete') {
            return this.httpDelete(`/contacts/batch`, { contacts: ids });
        }
        if (action === 'move') {
            return this.httpPut(`/contacts/batch-move`, {
                contacts: ids,
                origin: data.origin,
                destination: data.destination,
            });
        }
        throw new Error('Batch action does not exist');
    }
    unsubscribe(id) {
        return this.httpPut(`/contacts/${id}/unsubscribe`);
    }
}
exports.default = Contact;

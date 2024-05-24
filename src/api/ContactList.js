"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = __importDefault(require("./HttpClient"));
class ContactList extends HttpClient_1.default {
    index() {
        return this.httpGet('/contact-lists').then((json) => json);
    }
    show(id) {
        return this.httpGet(`/contact-lists/${id}`).then((json) => json);
    }
    create(data) {
        return this.httpPost('/contact-lists', data);
    }
    update(id, data) {
        return this.httpPut(`/contact-lists/${id}`, data);
    }
    hide(id) {
        return this.httpPut(`/contact-lists/${id}/hide`);
    }
    unhide(id) {
        return this.httpPut(`/contact-lists/${id}/unhide`);
    }
    delete(id) {
        return this.httpDelete(`/contact-lists/${id}`);
    }
    addContact(id, contactId) {
        return this.httpPut(`/contact-lists/${id}/add-contact/${contactId}`);
    }
    removeContact(id, contactId) {
        return this.httpPut(`/contact-lists/${id}/remove-contact/${contactId}`);
    }
    batch(action, ids, id) {
        if (action === 'delete') {
            return this.httpDelete(`/contact-lists/batch`, { contact_lists: ids });
        }
        if (action === 'add-contacts') {
            return this.httpPut(`/contact-lists/${id}/batch-add-contacts`, { contacts: ids });
        }
        if (action === 'remove-contacts') {
            return this.httpPut(`/contact-lists/${id}/batch-remove-contacts`, { contacts: ids });
        }
        throw new Error('Batch action does not exist');
    }
    duplicate(id, name) {
        return this.httpPost(`/contact-lists/${id}/duplicate`, { name });
    }
    merge(contact_lists, name) {
        return this.httpPost(`/contact-lists/merge`, { contact_lists, name });
    }
}
exports.default = ContactList;

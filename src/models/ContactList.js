"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactList {
    constructor(id, name, autoRemove = 0, description, unsubscribeText, viewInBrowser) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.unsubscribeText = unsubscribeText;
        this.viewInBrowser = viewInBrowser;
        this.autoRemove = autoRemove;
    }
}
exports.default = ContactList;

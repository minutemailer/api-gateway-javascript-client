"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactList {
    id;
    name;
    hidden;
    metadata;
    subscribe_url;
    created_at;
    updated_at;
    constructor(id, name, hidden, metadata, subscribe_url, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.metadata = metadata;
        this.subscribe_url = subscribe_url;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
exports.default = ContactList;

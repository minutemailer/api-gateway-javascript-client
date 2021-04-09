"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(id, email, firstName, lastName, phone, address, postalCode, status = 1, origin = 0) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.postalCode = postalCode;
        this.status = status;
        this.origin = origin;
    }
}
exports.default = Contact;

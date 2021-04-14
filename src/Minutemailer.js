"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_1 = __importDefault(require("./api/Contact"));
const ContactList_1 = __importDefault(require("./api/ContactList"));
class Minutemailer {
    constructor(apiKey, endpoint = 'https://api-gateway.minutemailer.com') {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }
    contact() {
        return new Contact_1.default(this.apiKey, this.endpoint);
    }
    contactList() {
        return new ContactList_1.default(this.apiKey, this.endpoint);
    }
}
exports.default = Minutemailer;

import Contact from './api/Contact';
import ContactList from './api/ContactList';

export default class Minutemailer {
    apiKey: string;
    endpoint: string;

    constructor(apiKey: string, endpoint: string = 'https://api-gateway.minutemailer.com') {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }

    contact(): Contact {
        return new Contact(this.apiKey, this.endpoint);
    }

    contactList(): ContactList {
        return new ContactList(this.apiKey, this.endpoint);
    }
}

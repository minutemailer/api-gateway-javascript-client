import Contact from './api/Contact';
import ContactList from './api/ContactList';
export default class Minutemailer {
    apiKey: string;
    endpoint: string;
    constructor(apiKey: string, endpoint?: string);
    contact(): Contact;
    contactList(): ContactList;
}

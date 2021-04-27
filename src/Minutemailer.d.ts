import Contact from './api/Contact';
import ContactList from './api/ContactList';
import Field from "./api/Field";
export default class Minutemailer {
    apiKey: string;
    endpoint: string;
    constructor(apiKey: string, endpoint?: string);
    contact(): Contact;
    contactList(): ContactList;
    field(): Field;
}

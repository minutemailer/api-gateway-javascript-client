import ContactListInterface from '../interfaces/ContactListInterface';
export default class ContactList implements ContactListInterface {
    id: string;
    name: string;
    hidden: boolean;
    metadata: Object;
    subscribe_url: string;
    created_at: string;
    updated_at: string;
    constructor(id: string, name: string, hidden: boolean, metadata: Object, subscribe_url: string, created_at: string, updated_at: string);
}

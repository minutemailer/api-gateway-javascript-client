import ContactListInterface from '../interfaces/ContactListInterface';
export default class ContactList implements ContactListInterface {
    id: string;
    name: string;
    description?: string;
    unsubscribeText?: string;
    viewInBrowser?: string;
    autoRemove: number;
    constructor(id: string, name: string, autoRemove?: number, description?: string, unsubscribeText?: string, viewInBrowser?: string);
}

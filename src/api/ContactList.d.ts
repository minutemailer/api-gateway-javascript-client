import HttpClient from './HttpClient';
import ContactListInterface from '../interfaces/ContactListInterface';
import CollectionInterface from "../interfaces/CollectionInterface";
interface Data {
    name: string;
    [key: string]: string | number | boolean;
}
interface Collection extends CollectionInterface {
    items: ContactListInterface[];
}
export default class ContactList extends HttpClient {
    index(): Promise<Collection>;
    show(id: string): Promise<ContactListInterface>;
    create(data: Data): Promise<Response>;
    update(id: string, data: Data): Promise<Response>;
    delete(id: string): Promise<Response>;
    addContact(id: string, contactId: string): Promise<Response>;
    removeContact(id: string, contactId: string): Promise<Response>;
    batch(action: string, ids: string[], id: string): Promise<Response>;
}
export {};

import HttpClient from './HttpClient';
import ContactListInterface from '../interfaces/ContactListInterface';
interface Data {
    name: string;
    [key: string]: string | number | boolean;
}
export default class ContactList extends HttpClient {
    index(): Promise<ContactListInterface[]>;
    show(id: string): Promise<ContactListInterface>;
    create(data: Data): Promise<Response>;
}
export {};

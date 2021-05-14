import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';
import CollectionInterface from "../interfaces/CollectionInterface";
interface Data {
    email: string;
    [key: string]: string | number | boolean;
}
interface Collection extends CollectionInterface {
    items: ContactInterface[];
}
export default class Contact extends HttpClient {
    index(): Promise<Collection>;
    show(id: string): Promise<ContactInterface>;
    create(data: Data): Promise<Response>;
    update(id: string, data: Data): Promise<Response>;
    delete(id: string): Promise<Response>;
}
export {};

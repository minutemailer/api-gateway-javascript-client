import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';
interface Data {
    email: string;
    [key: string]: string | number;
}
export default class Contact extends HttpClient {
    index(): Promise<ContactInterface[]>;
    show(id: string): Promise<ContactInterface>;
    create(data: Data): Promise<Response>;
}
export {};

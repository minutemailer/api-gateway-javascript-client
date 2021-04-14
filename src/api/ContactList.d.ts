import HttpClient from './HttpClient';
interface Data {
    name: string;
    [key: string]: string | number;
}
export default class ContactList extends HttpClient {
    index(): Promise<Response>;
    create(data: Data): Promise<Response>;
}
export {};

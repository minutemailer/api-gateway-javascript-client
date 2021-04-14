import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';

interface Data {
    name: string,
    [key: string]: string|number,
}

export default class ContactList extends HttpClient {
    index(): Promise<Response> {
        return this.get('/contact-lists');
    }

    create(data: Data): Promise<Response> {
        return this.post('/contact-lists', data);
    }
}

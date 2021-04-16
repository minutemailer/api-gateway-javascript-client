import HttpClient from './HttpClient';
import ContactListInterface from '../interfaces/ContactListInterface';

interface Data {
    name: string,
    [key: string]: string|number,
}

export default class ContactList extends HttpClient {
    index(): Promise<ContactListInterface[]> {
        return this.get('/contact-lists').then((json: any) => json as ContactListInterface[]);
    }

    show(id: string): Promise<ContactListInterface> {
        return this.get(`/contact-lists/${id}`).then((json: any) => json as ContactListInterface);
    }

    create(data: Data): Promise<Response> {
        return this.post('/contact-lists', data);
    }
}

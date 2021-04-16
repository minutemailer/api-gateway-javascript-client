import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';

interface Data {
    email: string,
    [key: string]: string|number,
}

export default class Contact extends HttpClient {
    index(): Promise<ContactInterface[]> {
        return this.get('/contacts').then((json: any) => json as ContactInterface[]);
    }

    show(id: string): Promise<ContactInterface> {
        return this.get(`/contacts/${id}`).then((json: any) => json as ContactInterface);
    }

    create(data: Data): Promise<Response> {
        return this.post('/contacts', data);
    }
}

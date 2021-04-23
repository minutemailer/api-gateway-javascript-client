import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';

interface Data {
    email: string,
    [key: string]: string|number|boolean,
}

export default class Contact extends HttpClient {
    index(): Promise<ContactInterface[]> {
        return this.httpGet('/contacts').then((json: any) => json as ContactInterface[]);
    }

    show(id: string): Promise<ContactInterface> {
        return this.httpGet(`/contacts/${id}`).then((json: any) => json as ContactInterface);
    }

    create(data: Data): Promise<Response> {
        return this.httpPost('/contacts', data);
    }

    delete(id: string): Promise<Response> {
        return this.httpDelete(`/contacts/${id}`);
    }
}

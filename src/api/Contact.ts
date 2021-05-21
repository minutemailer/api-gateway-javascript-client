import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';
import CollectionInterface from "../interfaces/CollectionInterface";

interface Data {
    email: string,
    [key: string]: string|number|boolean,
}

interface Collection extends CollectionInterface {
    items: ContactInterface[];
}

export default class Contact extends HttpClient {
    index(): Promise<Collection> {
        return this.httpGet('/contacts').then((json: any) => json as Collection);
    }

    show(id: string): Promise<ContactInterface> {
        return this.httpGet(`/contacts/${id}`).then((json: any) => json as ContactInterface);
    }

    create(data: Data): Promise<Response> {
        return this.httpPost('/contacts', data);
    }

    update(id: string, data: Data): Promise<Response> {
        return this.httpPut(`/contacts/${id}`, data);
    }

    delete(id: string): Promise<Response> {
        return this.httpDelete(`/contacts/${id}`);
    }

    batch(action: string, ids: string[]): Promise<Response> {
        if (action === 'delete') {
            return this.httpDelete(`/contacts/batch`, { contacts: ids });
        }

        throw new Error('Batch action does not exist');
    }
}

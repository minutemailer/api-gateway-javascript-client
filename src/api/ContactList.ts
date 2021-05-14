import HttpClient from './HttpClient';
import ContactListInterface from '../interfaces/ContactListInterface';
import CollectionInterface from "../interfaces/CollectionInterface";

interface Data {
    name: string,
    [key: string]: string|number|boolean,
}

interface Collection extends CollectionInterface {
    items: ContactListInterface[];
}

export default class ContactList extends HttpClient {
    index(): Promise<Collection> {
        return this.httpGet('/contact-lists').then((json: any) => json as Collection);
    }

    show(id: string): Promise<ContactListInterface> {
        return this.httpGet(`/contact-lists/${id}`).then((json: any) => json as ContactListInterface);
    }

    create(data: Data): Promise<Response> {
        return this.httpPost('/contact-lists', data);
    }

    update(id: string, data: Data): Promise<Response> {
        return this.httpPut(`/contact-lists/${id}`, data);
    }

    delete(id: string): Promise<Response> {
        return this.httpDelete(`/contact-lists/${id}`);
    }
}

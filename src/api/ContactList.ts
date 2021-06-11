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

    addContact(id: string, contactId: string): Promise<Response> {
        return this.httpPut(`/contact-lists/${id}/add-contact/${contactId}`);
    }

    removeContact(id: string, contactId: string): Promise<Response> {
        return this.httpPut(`/contact-lists/${id}/remove-contact/${contactId}`);
    }

    batch(action: string, ids: string[], id: string): Promise<Response> {
        if (action === 'delete') {
            return this.httpDelete(`/contact-lists/batch`, { contact_lists: ids });
        }

        if (action === 'add-contacts') {
            return this.httpPut(`/contact-lists/${id}/batch-add-contacts`, { contacts: ids });
        }

        if (action === 'remove-contacts') {
            return this.httpPut(`/contact-lists/${id}/batch-remove-contacts`, { contacts: ids });
        }

        throw new Error('Batch action does not exist');
    }

    duplicate(id: string, name: string): Promise<Response> {
        return this.httpPost(`/contact-lists/${id}/duplicate`, { name });
    }

    merge(contact_lists: string[], name: string): Promise<Response> {
        return this.httpPost(`/contact-lists/merge`, { contact_lists, name });
    }
}

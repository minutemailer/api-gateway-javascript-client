import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';
import CollectionInterface from "../interfaces/CollectionInterface";
import ContactStatus from "../enums/ContactStatus";
import CountInterface from "../interfaces/CountInterface";

interface Data {
    email: string,
    [key: string]: string|number|boolean,
}

interface BatchData {
    origin?: string,
    destination?: string,
}

interface IndexQuery {
    query?: string,
    inLists?: string,
    page?: number,
    limit?: number,
    status?: ContactStatus,
    since?: string,
    responseMode?: 'default'|'compact'|'count',
}

interface Collection extends CollectionInterface {
    items: ContactInterface[];
}

export default class Contact extends HttpClient {
    index(query: IndexQuery = {}): Promise<Collection> {
        return this.httpGet('/contacts', query).then((json: any) => json as Collection);
    }

    count(query: IndexQuery = {}): Promise<CountInterface> {
        return this.httpGet('/contacts', { ...query, response_mode: 'count' }).then((json: any) => json as CountInterface);
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

    batch(action: string, ids: string[], data: BatchData = {}): Promise<Response> {
        if (action === 'delete') {
            return this.httpDelete(`/contacts/batch`, { contacts: ids });
        }

        if (action === 'move') {
            return this.httpPut(
                `/contacts/batch-move`,
                {
                    contacts: ids,
                    origin: data.origin,
                    destination: data.destination,
                },
            );
        }

        throw new Error('Batch action does not exist');
    }

    unsubscribe(id: string): Promise<Response> {
        return this.httpPut(`/contacts/${id}/unsubscribe`);
    }
}

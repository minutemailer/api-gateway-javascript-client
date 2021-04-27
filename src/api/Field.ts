import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';
import FieldInterface from "../interfaces/FieldInterface";
import CollectionInterface from "../interfaces/CollectionInterface";

interface Data {
    external_id: string;
    name: string;
    type: string;
    is_visible?: boolean;
}

interface Collection extends CollectionInterface {
    items: FieldInterface[];
}

export default class Field extends HttpClient {
    index(): Promise<Collection> {
        return this.httpGet('/fields').then((json: any) => json as Collection);
    }

    show(id: string): Promise<FieldInterface> {
        return this.httpGet(`/fields/${id}`).then((json: any) => json as FieldInterface);
    }

    create(data: Data): Promise<Response> {
        return this.httpPost('/fields', data);
    }

    delete(id: string): Promise<Response> {
        return this.httpDelete(`/fields/${id}`);
    }
}

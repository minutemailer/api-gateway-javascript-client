import HttpClient from './HttpClient';
import ContactInterface from '../interfaces/ContactInterface';
import CollectionInterface from "../interfaces/CollectionInterface";
import ContactStatus from "../enums/ContactStatus";
import CountInterface from "../interfaces/CountInterface";
interface Data {
    email: string;
    [key: string]: string | number | boolean;
}
interface BatchData {
    origin?: string;
    destination?: string;
}
interface IndexQuery {
    query?: string;
    inLists?: string;
    page?: number;
    limit?: number;
    status?: ContactStatus;
    since?: string;
    responseMode?: 'default' | 'compact' | 'count';
    segment?: string;
}
interface Collection extends CollectionInterface {
    items: ContactInterface[];
}
export default class Contact extends HttpClient {
    index(query?: IndexQuery): Promise<Collection>;
    count(query?: IndexQuery): Promise<CountInterface>;
    show(id: string): Promise<ContactInterface>;
    create(data: Data, sendConfirmation?: string): Promise<Response>;
    update(id: string, data: Data): Promise<Response>;
    delete(id: string): Promise<Response>;
    batch(action: string, ids: string[], data?: BatchData): Promise<Response>;
    unsubscribe(id: string): Promise<Response>;
}
export {};

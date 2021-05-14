import HttpClient from './HttpClient';
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
    index(): Promise<Collection>;
    show(id: string): Promise<FieldInterface>;
    create(data: Data): Promise<Response>;
    update(id: string, data: Data): Promise<Response>;
    delete(id: string): Promise<Response>;
}
export {};

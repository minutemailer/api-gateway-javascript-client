import ContactListInterface from '../interfaces/ContactListInterface';

export default class ContactList implements ContactListInterface {
    id: string;
    name: string;
    hidden: boolean;
    metadata: Object;
    subscribe_url: string;
    created_at: string;
    updated_at: string;

    constructor(
        id: string,
        name: string,
        hidden: boolean,
        metadata: Object,
        subscribe_url: string,
        created_at: string,
        updated_at: string,
    ) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.metadata = metadata;
        this.subscribe_url = subscribe_url;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

export default class ContactList {
    id: string;
    name: string;
    description?: string;
    unsubscribeText?: string;
    viewInBrowser?: string;
    autoRemove: number;

    constructor(
        id: string,
        name: string,
        autoRemove: number = 0,
        description?: string,
        unsubscribeText?: string,
        viewInBrowser?: string,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.unsubscribeText = unsubscribeText;
        this.viewInBrowser = viewInBrowser;
        this.autoRemove = autoRemove;
    }
}

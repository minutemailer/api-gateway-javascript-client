interface ContactListInterface extends Object {
    id: string;
    name: string;
    description?: string;
    unsubscribeText?: string;
    viewInBrowser?: string;
    autoRemove: number;
}

export default ContactListInterface;

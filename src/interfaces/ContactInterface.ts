import ContactStatus from '../enums/ContactStatus';
import ContactOrigin from '../enums/ContactOrigin';

interface ContactInterface extends Object {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    postalCode?: string;
    status: ContactStatus;
    origin: ContactOrigin;
}

export default ContactInterface;

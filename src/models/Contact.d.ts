import ContactStatus from '../enums/ContactStatus';
import ContactOrigin from '../enums/ContactOrigin';
import ContactInterface from '../interfaces/ContactInterface';
export default class Contact implements ContactInterface {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    postalCode?: string;
    status: ContactStatus;
    origin: ContactOrigin;
    constructor(id: string, email: string, firstName?: string, lastName?: string, phone?: string, address?: string, postalCode?: string, status?: ContactStatus, origin?: ContactOrigin);
}

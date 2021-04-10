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

    constructor(
        id: string,
        email: string,
        firstName?: string,
        lastName?: string,
        phone?: string,
        address?: string,
        postalCode?: string,
        status: ContactStatus = 1,
        origin: ContactOrigin = 0,
    ) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.postalCode = postalCode;
        this.status = status;
        this.origin = origin;
    }
}

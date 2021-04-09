import Contact from "./api/Contact";
export default class Minutemailer {
    apiKey: string;
    endpoint: string;
    constructor(apiKey: string, endpoint?: string);
    contact(): Contact;
}

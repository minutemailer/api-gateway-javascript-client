import Contact from "./api/Contact";

export default class Minutemailer {
    apiKey: string;
    endpoint: string;

    constructor(apiKey: string, endpoint: string = 'https://api-gateway.minutemailer.com') {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
    }

    contact(): Contact {
        return new Contact(this.apiKey, this.endpoint);
    }
}

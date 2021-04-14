import HttpClient from './HttpClient';

interface Data {
    email: string,
    [key: string]: string|number,
}

export default class Contact extends HttpClient {
    index(): Promise<Response> {
        return this.get('/contacts');
    }

    create(data: Data): Promise<Response> {
        return this.post('/contacts', data);
    }
}

import HttpClient from './HttpClient';
interface Data {
    email: string;
    [key: string]: string | number;
}
export default class Contact extends HttpClient {
    index(): Promise<Response>;
    create(data: Data): Promise<Response>;
}
export {};

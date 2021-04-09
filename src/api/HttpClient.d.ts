interface Headers {
    [key: string]: string;
}
export default class HttpClient {
    apiKey: string;
    endpoint: string;
    headers: Headers;
    constructor(apiKey: string, endpoint: string);
    get(path: string, params?: Object, headers?: Headers): Promise<Response>;
}
export {};

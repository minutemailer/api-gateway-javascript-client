interface Headers {
    [key: string]: string;
}
export default class HttpClient {
    apiKey: string;
    endpoint: string;
    headers: Headers;
    constructor(apiKey: string, endpoint: string);
    request(path: string, method?: string, body?: string, headers?: Headers): Promise<Response>;
    get(path: string, params?: Object, headers?: Headers): Promise<Response>;
    post(path: string, data: Object, headers?: Headers): Promise<Response>;
}
export {};

import objToQuery from '../lib/objToQuery';
import RequestError from './RequestError';

interface Headers {
    [key: string]: string,
};

export default class HttpClient {
    apiKey: string;
    endpoint: string;

    headers: Headers;

    constructor(apiKey: string, endpoint: string) {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
        this.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'minutemailer-gateway-api/v1',
            'X-Auth-Token': this.apiKey,
        };
    }

    request(path: string, method: string = 'GET', body = '', headers: Headers = {}): Promise<Response> {
        const url = `${this.endpoint}${path}`;
        const opts: RequestInit = {
            method,
            headers: {
                ...this.headers,
                ...headers,
            },
        };

        if (method !== 'GET') {
            opts.body = body;
        }

        return fetch(
            url,
            opts,
        ).then((r) => r.json().then((json) => {
            if (r.status > 299) {
                throw new RequestError(r.statusText, json, r.status);
            }

            return json;
        }));
    }

    get(path: string, params?: Object, headers: Headers = {}): Promise<Response> {
        let url = path;

        if (params) {
            url += `?${objToQuery(params)}`;
        }

        return this.request(url, 'GET', '', headers);
    }

    post(path: string, data: Object, headers: Headers = {}): Promise<Response> {
        return this.request(path, 'POST', JSON.stringify(data), headers);
    }
}

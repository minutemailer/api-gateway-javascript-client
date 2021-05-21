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

        if (method !== 'GET' && body.length) {
            opts.body = body;
        }

        return fetch(
            url,
            opts,
        ).then((r) => {
            if (r.status === 204) {
                return '';
            }

            return r.json().then((json) => {
                if (r.status > 299) {
                    throw new RequestError(r.statusText, json, r.status);
                }

                return json;
            });
        });
    }

    httpGet(path: string, params?: Object, headers: Headers = {}): Promise<Response> {
        let url = path;

        if (params) {
            url += `?${objToQuery(params)}`;
        }

        return this.request(url, 'GET', '', headers);
    }

    httpPost(path: string, data: Object, headers: Headers = {}): Promise<Response> {
        return this.request(path, 'POST', JSON.stringify(data), headers);
    }

    httpPut(path: string, data: Object|null = null, headers: Headers = {}): Promise<Response> {
        return this.request(path, 'PUT', (data) ? JSON.stringify(data) : '', headers);
    }

    httpDelete(path: string, data: Object|null = null, headers: Headers = {}): Promise<Response> {
        return this.request(path, 'DELETE', (data) ? JSON.stringify(data) : '', headers);
    }
}

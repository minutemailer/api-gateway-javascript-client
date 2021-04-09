import objToQuery from '../lib/objToQuery';

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

    get(path: string, params?: Object, headers: Headers = {}): Promise<Response> {
        let url = `${this.endpoint}${path}`;

        if (params) {
            url += `?${objToQuery(params)}`;
        }

        return fetch(
            url,
            {
                headers: {
                    ...this.headers,
                    ...headers,
                },
            },
        ).then((r) => {
            console.error(r);

            return r.json();
        });
    }
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../lib/objToQuery"));
const RequestError_1 = __importDefault(require("./RequestError"));
;
class HttpClient {
    constructor(apiKey, endpoint) {
        this.apiKey = apiKey;
        this.endpoint = endpoint;
        this.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'User-Agent': 'minutemailer-gateway-api/v1',
            'X-Auth-Token': this.apiKey,
        };
    }
    request(path, method = 'GET', body = '', headers = {}) {
        const url = `${this.endpoint}${path}`;
        const opts = {
            method,
            headers: {
                ...this.headers,
                ...headers,
            },
        };
        if (method !== 'GET' && body.length) {
            opts.body = body;
        }
        return fetch(url, opts).then((r) => {
            if (r.status === 204) {
                return '';
            }
            return r.json().then((json) => {
                if (r.status > 299) {
                    throw new RequestError_1.default(r.statusText, json, r.status);
                }
                return json;
            });
        });
    }
    httpGet(path, params, headers = {}) {
        let url = path;
        if (params) {
            url += `?${objToQuery_1.default(params)}`;
        }
        return this.request(url, 'GET', '', headers);
    }
    httpPost(path, data, headers = {}) {
        return this.request(path, 'POST', JSON.stringify(data), headers);
    }
    httpPut(path, data, headers = {}) {
        return this.request(path, 'PUT', JSON.stringify(data), headers);
    }
    httpDelete(path, headers = {}) {
        return this.request(path, 'DELETE', '', headers);
    }
}
exports.default = HttpClient;

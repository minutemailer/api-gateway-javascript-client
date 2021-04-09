"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery_1 = __importDefault(require("../lib/objToQuery"));
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
    get(path, params, headers = {}) {
        let url = `${this.endpoint}${path}`;
        if (params) {
            url += `?${objToQuery_1.default(params)}`;
        }
        return fetch(url, {
            headers: {
                ...this.headers,
                ...headers,
            },
        }).then((r) => {
            console.error(r);
            return r.json();
        });
    }
}
exports.default = HttpClient;

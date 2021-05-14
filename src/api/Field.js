"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpClient_1 = __importDefault(require("./HttpClient"));
class Field extends HttpClient_1.default {
    index() {
        return this.httpGet('/fields').then((json) => json);
    }
    show(id) {
        return this.httpGet(`/fields/${id}`).then((json) => json);
    }
    create(data) {
        return this.httpPost('/fields', data);
    }
    update(id, data) {
        return this.httpPut(`/fields/${id}`, data);
    }
    delete(id) {
        return this.httpDelete(`/fields/${id}`);
    }
}
exports.default = Field;

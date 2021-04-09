"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objToQuery = (obj, exclude = [], parent = null) => {
    const query = [];
    Object.entries(obj).forEach(([key, value]) => {
        if (exclude.indexOf(key) > -1) {
            return;
        }
        const queryKey = (parent) ? `${parent}[${key}]` : key;
        if (Array.isArray(value)) {
            value.forEach((subValue) => query.push(`${queryKey}[]=${subValue}`));
        }
        else if (typeof value === 'object' && value !== null) {
            query.push(objToQuery(value, exclude, queryKey));
        }
        else {
            query.push(`${queryKey}=${value}`);
        }
    });
    return query.join('&');
};
exports.default = (obj, exclude) => objToQuery(obj, exclude);

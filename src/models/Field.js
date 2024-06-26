"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Field {
    id;
    external_id;
    name;
    type;
    is_visible;
    constructor(id, externalId, name, type, is_visible = false) {
        this.id = id;
        this.external_id = externalId;
        this.name = name;
        this.type = type;
        this.is_visible = is_visible;
    }
}
exports.default = Field;

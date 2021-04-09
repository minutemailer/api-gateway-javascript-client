import FieldType from '../enums/FieldType';
export default class Field {
    id: string;
    externalId: string;
    name: string;
    type: FieldType;
    constructor(id: string, externalId: string, name: string, type: FieldType);
}

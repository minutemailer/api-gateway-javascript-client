import FieldType from '../enums/FieldType';
import FieldInterface from "../interfaces/FieldInterface";
export default class Field implements FieldInterface {
    id: string;
    external_id: string;
    name: string;
    type: FieldType;
    is_visible?: boolean;
    constructor(id: string, externalId: string, name: string, type: FieldType, is_visible?: boolean);
}

import FieldType from "../enums/FieldType";
interface FieldInterface extends Object {
    id: string;
    external_id: string;
    name: string;
    type: FieldType;
    is_visible?: boolean;
}
export default FieldInterface;

import { ModalTypes } from "../enums/modal-types.enum";
import { List } from "./list.model";
import { User } from "./user.model";
import { Word } from "./word.model";

export interface ModalOutput {
    type: ModalTypes,
    data: User | Word | List;
}
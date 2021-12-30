import { ModalTypes } from "../enums/modal-types.enum";

export interface ModalOutput {
    type: ModalTypes,
    data: Object
}
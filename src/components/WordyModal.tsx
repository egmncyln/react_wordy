import React, { useEffect, useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { ModalTypes } from '../enums/modal-types.enum';
import { List } from '../models/list.model';
import { ModalOutput } from '../models/modal-output.model';

function WordyModal(props: any) {
    let [show, setShow] = useState(false);
    let _listName: string;

    useEffect(() => props.show ? setShow(true) : setShow(false), [props.show])

    let getModalTitle = () => {
        if (props.type === ModalTypes.User) {
            return "Create a new user";
        }
        else if (props.type === ModalTypes.Word) {
            return "Create a new word";
        }
        else if (props.type === ModalTypes.List) {
            return "Create a new list";
        }
    }

    let getModalBody = () => {
        if (props.type === ModalTypes.User) {

        }
        else if (props.type === ModalTypes.Word) {

        }
        else if (props.type === ModalTypes.List) {
            return (
                <FormControl
                    placeholder="Enter a list name"
                    onKeyPress={(e: any) => e.which === 32 || e.which === 95 ? e.preventDefault() : null}
                    onChange={(e: any) => _listName = e.target.value}
                />
            );
        }
    }

    let onCreate = () => {
        if (props.type === ModalTypes.User) {

        }
        else if (props.type === ModalTypes.Word) {

        }
        else if (props.type === ModalTypes.List) {
            if (_listName) {
                let data: Object = { listName: _listName }
                let output: ModalOutput = { type: props.type, data: data };
                props.onCreate(output);
                setShow(false);
            }
        }
    }

    return (
        <Modal
            show={show}
            onHide={props.onClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{getModalTitle()}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{getModalBody()}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>Close</Button>
                <Button variant="primary" onClick={onCreate}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default WordyModal;

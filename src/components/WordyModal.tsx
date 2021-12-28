import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function WordyModal(props: any) {
    const [show, setShow] = useState(false);

    useEffect(
        () => props.showModal ? setShow(true) : setShow(false),
        [props.showModal]
    )

    return (
        <Modal
            show={show}
            onHide={props.onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default WordyModal;

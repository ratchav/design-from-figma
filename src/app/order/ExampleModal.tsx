'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from './Card';

function ExampleModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                {/* <Modal.Header  >
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header> */}
                {/* <Modal.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.</Modal.Body> */}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"    >
                        Action
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ExampleModal;
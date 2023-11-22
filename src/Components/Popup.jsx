import { React } from 'react';
import '../Css/Popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';



const Popup = ({ onHide }) => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button> */}

            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>My Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Your modal content goes here */}
                    <p>This is the content of your modal.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default Popup;
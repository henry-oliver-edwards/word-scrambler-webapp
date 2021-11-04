import {Button, Modal, ModalBody, ModalFooter} from "react-bootstrap";
import {useState} from "react";

const DescButton = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id={'desc-button'}>
            <Button variant="success" onClick={handleShow} className={'button-fill'}>Quick Description</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton={true}>
                </Modal.Header>
                <ModalBody>The basic premise of this game is to get a random obscure word,
                    you then make up a definition while others do the same.
                        You then vote on what definition you think is right, and that's it</ModalBody>
                <ModalFooter>
                    <Button itemRef={'let-go-button'} onClick={handleClose}>
                        Let's Go!
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default DescButton;
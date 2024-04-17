import "./Modals.css";
import Forms from "../Forms/Forms";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Modals = ({ showModal, setShowModal }) => { // Receive showModal and setShowModal as props
    const handleClose = () => setShowModal(false);

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header className='modal-signup'>
                <Modal.Title>"Transform Your Financial Future"</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-signup'>
                <Forms />
            </Modal.Body>
            <Modal.Footer className='modal-signup'>
                <Link className='btn btn-third' onClick={handleClose}>
                    Close
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

export default Modals;

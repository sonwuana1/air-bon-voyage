import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteBooking } from '../../store/booking';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'



function DeleteBooking() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const history = useHistory();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleOnSubmit() {
        await dispatch(deleteBooking(id));
        history.push(`/`);
    }

    return (
        <div>
            {/* <button type="submit" onClick={handleOnSubmit}>Delete</button> */}
            <Button variant="secondary" onClick={handleShow}>Delete</Button>{' '}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>WAIT! You're about to Delete this booking!</Modal.Title>
                </Modal.Header>
                <Modal.Body>What about our vacation?
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Never Mind
                </Button>
                <Button variant="primary" onClick={handleOnSubmit}>
                    Yes Please
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteBooking;

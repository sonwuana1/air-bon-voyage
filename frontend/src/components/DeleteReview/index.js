import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/review';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function DeleteReview({ props }) {
    // console.log(props.review)
    const dispatch = useDispatch();
    // const { id } = useParams();
    // console.log(id)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userState = useSelector(state => state.session.user)
    // const reviewState = useSelector(state => state.review)
    // console.log('REVIEWSTATE', reviewState)


    async function handleOnSubmit() {
        if (props.review.id) {
            await dispatch(deleteReview(props.review.id));
        }
    }

    return (
        <div>
            <Button variant="outline-danger" onClick={handleShow} disabled={props?.review?.User?.id !== userState?.id}>
                Delete Review
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Hey! You're about to Delete this review!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you don't want us to know about this place?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Never Mind
                </Button>
                <Button variant="outline-primary" onClick={handleOnSubmit}>
                    Yes Please
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteReview;

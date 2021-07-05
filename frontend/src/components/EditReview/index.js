import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { editReview } from '../../store/review';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



const EditReview = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)

    const reviewState = useSelector(state => state.review)
    // console.log('REVIEWSTATE', reviewState)

    const [rating, setRating] = useState();
    const [content, setContent] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleOnSubmit(e) {
        e.preventDefault()
        const payload = { rating, content }
        const newReview = await dispatch(editReview(id, payload))
        if (newReview) {
            history.push(`/spots/${id}`)
        }
    }


    return(
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit Review
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton>
                <Modal.Title>How did you like this place?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* I will not close if you click outside me. Don't even try to press
                escape key. */}
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group controlId="formInteger">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as="select" value={rating} onChange={(e) => setRating(e.target.value)} required>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formText">
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleOnSubmit}>Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

};


export default EditReview;

import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteReview } from '../../store/review';
import Button from 'react-bootstrap/Button'


function DeleteReview() {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)

    const reviewState = useSelector(state => state.review)
    console.log('REVIEWSTATE', reviewState)

    const history = useHistory();

    async function handleOnSubmit() {
        await dispatch(deleteReview(id));
        history.push(`/`);
    }

    return (
        <div>
            <Button variant="secondary" onClick={handleOnSubmit}>Delete</Button>{' '}
        </div>
    )
}

export default DeleteReview;

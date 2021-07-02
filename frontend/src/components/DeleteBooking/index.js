import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteBooking } from '../../store/booking';
import Button from 'react-bootstrap/Button'


function DeleteBooking() {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const history = useHistory();

    async function handleOnSubmit() {
        await dispatch(deleteBooking(id));
        history.push(`/`);
    }

    return (
        <div>
            {/* <button type="submit" onClick={handleOnSubmit}>Delete</button> */}
            <Button variant="secondary" onClick={handleOnSubmit}>Delete</Button>{' '}
        </div>
    )
}

export default DeleteBooking;

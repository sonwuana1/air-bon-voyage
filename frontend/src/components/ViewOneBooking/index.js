import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getOneBooking } from '../../store/booking';
import UpdateBooking from '../UpdateBooking';
import DeleteBooking from '../DeleteBooking';
import Container from 'react-bootstrap/Container'



const ViewOneBooking = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const bookingState = useSelector(state => state.booking)
    // console.log('STATEEEEEEE', bookingState)

    useEffect(() => {
        if (id) {
            dispatch(getOneBooking(id))
        }
    }, [dispatch, id])

    if (!id) {
        history.push('/')
    }

    return (
        <Container>
            <div>
                <h2>Current Booking: </h2>
                <h3>{bookingState.Spot?.name}</h3>
                <h3>{bookingState?.start_date} to {bookingState?.end_date}</h3>
                <UpdateBooking />
                <DeleteBooking />
            </div>
        </Container>
    )
}


export default ViewOneBooking;

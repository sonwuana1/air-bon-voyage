import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOneBooking } from '../../store/booking';
import UpdateBooking from '../UpdateBooking';
import DeleteBooking from '../DeleteBooking';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ViewOneBooking.css'



const ViewOneBooking = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const bookingState = useSelector(state => state.booking[id])
    // console.log('STATEEEEEEE', bookingState)

    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) {
        history.push('/login')
    }

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
                <h2 className='bookingTitle'>Current Booking: </h2>
                <Row>
                    <Col>
                        <h3>{bookingState?.Spot?.name}</h3>
                        <h3>{bookingState?.start_date} to {bookingState?.end_date}</h3>
                        <UpdateBooking />
                        <DeleteBooking />
                    </Col>
                    <Col>
                        <img
                        src="https://i.imgur.com/VJpw6sy.jpeg"
                        alt=""
                        width="500px"
                        height="300px"
                        ></img>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}


export default ViewOneBooking;

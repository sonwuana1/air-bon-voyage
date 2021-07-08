import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBookings } from '../../store/booking';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


const ViewAllBookings = () => {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => Object.values(state.booking))
    // console.log('BOOKING STATE', bookingState)

    useEffect(() => {
        dispatch(getAllBookings())
    }, [dispatch])

    return (
        <div>
            <Container >
                <h2>Current Bookings: </h2>
                {bookingState?.map(obj => {
                    return(
                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title>{obj?.Spot.name}</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                    <div>
                                        Date: <Link to={`/bookings/${obj?.id}`}>{obj?.start_date} to {obj?.end_date}</Link>
                                    </div>
                                </Card.Text>
                                <Card.Link href={`/bookings/${obj?.id}`}>Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                        // <Link to={`/bookings/${obj?.id}`}>{obj?.start_date} to {obj?.end_date}</Link>
                    )
                })}
            </Container>
        </div>
    )

}


export default ViewAllBookings;

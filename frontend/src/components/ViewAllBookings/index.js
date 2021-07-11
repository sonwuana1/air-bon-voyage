import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { getAllBookings } from '../../store/booking';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'


const ViewAllBookings = () => {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => Object.values(state.booking))
    // console.log('BOOKING STATE', bookingState)

    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    // console.log(sessionUser)

    if (!sessionUser) {
        history.push('/login')
    }

    useEffect(() => {
        dispatch(getAllBookings())
    }, [dispatch])

    return (
        <div>
            <Container >
                <h2 className="text-center">Current Bookings: </h2>
                {bookingState?.map(obj => {
                    return(
                        <Card className="text-center">
                            {/* <Card.Header>Featured</Card.Header> */}
                                <Card.Body>
                                    <Card.Title>{obj?.Spot?.name}</Card.Title>
                                    <Card.Text>
                                        <NavLink to={`/bookings/${obj?.id}`}>{obj?.start_date} to {obj?.end_date}</NavLink>
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            {/* <Card.Footer className="text-muted"></Card.Footer> */}
                        </Card>
                    )
                })}
            </Container>
        </div>
    )
}


export default ViewAllBookings;

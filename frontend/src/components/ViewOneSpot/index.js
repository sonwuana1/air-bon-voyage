import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getOneSpot } from '../../store/spot';
import CreateBooking from '../CreateBooking';
import ViewAllReviews from '../ViewAllReviews';
import CreateReview from '../CreateReview';
import EditReview from '../EditReview';
import DeleteReview from '../DeleteReview';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ViewOneSpot.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MyMaps from '../MyMaps';




const ViewOneSpot = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const spotState = useSelector(state => state.spot)
    // console.log('STATEEEEEEE', spotState)

    const sessionUser = useSelector(state => state.session.user);
    // console.log(sessionUser)
    if (!sessionUser) {
        history.push('/login')
    }

    useEffect(() => {
        if (id) {
            dispatch(getOneSpot(id))
        }
    }, [dispatch, id])

    if (!id) {
        history.push('/')
    }


    return (
        <div>
            <div className='titleContainer'>
                <h2>{spotState.name}</h2>
            </div>
            <div>
                <Container>
                    <Row>
                        {spotState.Images?.map(pic => {
                            return(
                                <Col>
                                    <div>
                                        <img src={pic.link} alt='' width={300}></img>

                                    </div>
                                </Col>
                            )
                        })}
                        <MyMaps props={{spotState}}/>
                        {/* <GoogleMap googleMapsApiKey='AIzaSyAUN3kd3mSSvon94EFE-xpunp5dWR20gUM'
                            mapContainerStyle={mapStyles}
                            zoom={16}
                            center={newCenter}

                            >
                            <Marker position={newCenter}/>
                        </GoogleMap> */}
                    </Row>
                </Container>
            </div>
            <div className='spotPageContainer'>
                <h4>{spotState.location}</h4>
                <h4>${spotState.price}</h4>
                <p>{spotState.description}</p>
                <p>Number of guests: {spotState.num_of_guests}</p>
                <p>Number of beds: {spotState.num_of_beds}</p>
                <p>Number of baths: {spotState.num_of_baths}</p>
            </div>

            <div className='spotPageContainer'>
                <h2>Book Today!</h2>
                <CreateBooking />
            </div>
            <div className='spotPageContainer'>
                <h3>Reviews</h3>
                <CreateReview />
                <ViewAllReviews />
            </div>

        </div>
    )
}


export default ViewOneSpot;

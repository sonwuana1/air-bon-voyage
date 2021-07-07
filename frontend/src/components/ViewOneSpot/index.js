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




const ViewOneSpot = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const spotState = useSelector(state => state.spot)
    // console.log('STATEEEEEEE', spotState)

    useEffect(() => {
        if (id) {
            dispatch(getOneSpot(id))
        }
    }, [dispatch, id])

    if (!id) {
        history.push('/')
    }

    const mapStyles = {
        height: "40vh",
        width: "50%"
    };


    const locations = [
        {
          id: 1,
          location: {
            lat: 59.3409,
            lng: 18.0754
          },
        },
        {
          id: 2,
          location: {
            lat: 59.3313,
            lng: 18.0311
          },
        },
        {
          id: 3,
          location: {
            lat: 19.734005,
            lng: -155.040745
          },
        },
        {
          id: 4,
          location: {
            lat: 35.90016,
            lng: 14.51000
          },
        },
        {
          id: 5,
          location: {
            lat: 36.0312,
            lng: 14.2180
          },
        },
        {
            id: 6,
            location: {
              lat: 41.4055,
              lng: 2.1915
            },
        }
    ];

    const newCenter = locations.find(item => item.id == id).location
    // console.log(newCenter)


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
                        <GoogleMap googleMapsApiKey='AIzaSyAUN3kd3mSSvon94EFE-xpunp5dWR20gUM'
                            mapContainerStyle={mapStyles}
                            zoom={16}
                            center={newCenter}

                            >
                            <Marker position={newCenter}/>
                        </GoogleMap>
                    </Row>

                </Container>
            </div>
            {/* <GoogleMap googleMapsApiKey='AIzaSyAUN3kd3mSSvon94EFE-xpunp5dWR20gUM'
                mapContainerStyle={mapStyles}
                zoom={15}
                center={newCenter}

            >
                <Marker position={newCenter}/>
            </GoogleMap> */}
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
                {spotState.Reviews?.map(review => {
                    return(
                        <div>
                            <p>Rating: {review.rating}</p>
                            <p>{review.content}</p>
                            <EditReview />
                            {/* <DeleteReview /> */}
                        </div>
                    )
                })}
                {/* <ViewAllReviews /> */}
            </div>

        </div>
    )
}


export default ViewOneSpot;

// Google Maps apiKey: 'AIzaSyAUN3kd3mSSvon94EFE-xpunp5dWR20gUM'

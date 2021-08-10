import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOneSpot } from '../../store/spot';
import CreateBooking from '../CreateBooking';
import ViewAllReviews from '../ViewAllReviews';
import CreateReview from '../CreateReview';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ViewOneSpot.css';
import MyMaps from '../MyMaps';
import Carousel from 'react-bootstrap/Carousel'




const ViewOneSpot = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { id } = useParams();
    // console.log(id)
    const spotState = useSelector(state => Object.values(state.spot))
    console.log('STATEEEEEEE', spotState)

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
        <div className='upperSpotPageContainer'>
            <div className='titleContainer'>
                <h2>💜 {spotState.name} 💜</h2>
            </div>
            <div>
                <div className='carouselContainer'>
                    <Carousel>
                        {spotState.Images?.map(pic => {
                            return(
                                <Carousel.Item interval={2500}>
                                    <img
                                    className="d-block "
                                    src={`${pic.link}/text=First slide&bg=373940`}
                                    alt=""
                                    width={500}
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
            <Container>
                <Row>
                    <Col>
                        <MyMaps props={{spotState}}/>
                    </Col>
                    <Col>
                        <div className='spotPageContainer'>
                            <h3>{spotState.location}</h3>
                            <h4>${spotState.price} / night</h4>
                            <p>{spotState.description}</p>
                            <p>Number of guests: {spotState.num_of_guests}</p>
                            <p>Number of beds: {spotState.num_of_beds}</p>
                            <p>Number of baths: {spotState.num_of_baths}</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className='bookingPageContainer'>
                <h2>Book Today:</h2>
                <CreateBooking />
            </div>
            <div className='spotPageContainer'>
                <h3>Reviews:</h3>
                <ViewAllReviews />
                <CreateReview />
            </div>

        </div>
    )
}


export default ViewOneSpot;

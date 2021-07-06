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

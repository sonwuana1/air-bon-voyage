import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ReviewsBySpotId } from '../../store/review';
import EditReview from '../EditReview';
import DeleteReview from '../DeleteReview';
import Card from 'react-bootstrap/Card'


const ViewAllReviews = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    // console.log('another id', id)
    const reviewState = useSelector(state => Object.values(state.review))
    // console.log('REVIEWWWWWW', reviewState)

    const ratingHearts = (num) => {
        if (num === 1) return '💜'
        if (num === 2) return '💜💜'
        if (num === 3) return '💜💜💜'
        if (num === 4) return '💜💜💜💜'
        if (num === 5) return '💜💜💜💜💜'
    }


    useEffect(() => {
        dispatch(ReviewsBySpotId(id))
    }, [dispatch, id])


    return (
        <div key='reviews'>
            <h2 key='allReviews'>
                {reviewState?.map(review => {
                    return (
                        <Card border="light">
                            <Card.Header>{review?.User?.first_name}</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p key='rating'>
                                    {' '}
                                    Rating: { ratingHearts(review?.rating) }{' '}
                                    </p>
                                    <p key='content'>
                                    {' '}
                                    {review?.content}{' '}
                                    </p>
                                    <footer >
                                        <p>
                                            <EditReview props={{review}}/>
                                        </p>
                                        <p>
                                            <DeleteReview props={{review}}/>
                                        </p>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                      </Card>
                    )
                })}
            </h2>
        </div>
    )
}


export default ViewAllReviews;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviewsBySpotId } from '../../store/review';
import EditReview from '../EditReview';


const ViewAllReviews = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    console.log('another id', id)
    const reviewState = useSelector(state => Object.values(state.review))
    console.log('REVIEWWWWWW', reviewState)


    useEffect(() => {
        dispatch(fetchReviewsBySpotId(id))
    }, [dispatch, id])


    return (
        <div>
            <h2>
                {reviewState?.map(review => {
                    return (
                        <div>
                            <p>Anonymous</p>
                            <p>Rating: {review?.rating}</p>
                            <p>{review?.content}</p>
                            <EditReview />
                        </div>
                    )
                })}
            </h2>
        </div>
    )
}


export default ViewAllReviews;

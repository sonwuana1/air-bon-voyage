import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ReviewsBySpotId } from '../../store/review';
import EditReview from '../EditReview';
import DeleteReview from '../DeleteReview';


const ViewAllReviews = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    // console.log('another id', id)
    const reviewState = useSelector(state => Object.values(state.review))
    // console.log('REVIEWWWWWW', reviewState)


    useEffect(() => {
        dispatch(ReviewsBySpotId(id))
    }, [dispatch, id])


    return (
        <div key='reviews'>
            <h2 key='allReviews'>
                {reviewState?.map(review => {
                    return (
                        <div>
                            <p>Anonymous</p>
                            <p key='rating'>Rating: {review?.rating}</p>
                            <p key='content'>{review?.content}</p>
                            <EditReview props={{review}}/>
                            <DeleteReview props={{review}}/>
                        </div>
                    )
                })}
            </h2>
        </div>
    )
}


export default ViewAllReviews;

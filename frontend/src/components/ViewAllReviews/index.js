import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviews } from '../../store/review';
import EditReview from '../EditReview';


const ViewAllReviews = () => {
    const dispatch = useDispatch()
    const reviewState = useSelector(state => Object.values(state.review))
    // console.log('STATEEEEEEE', reviewState)


    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])


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

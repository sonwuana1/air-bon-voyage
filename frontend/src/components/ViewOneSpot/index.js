import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getOneSpot } from '../../store/spot';
import CreateBooking from '../CreateBooking';


const ViewAllSpots = () => {
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
            <h2>{spotState.name}</h2>
            <div>
                {spotState.Images?.map(pic => {
                    return(
                        <div>
                            <img src={pic.link} alt=''></img>
                        </div>
                    )
                })}
            </div>
            <h4>{spotState.location}</h4>
            <h4>${spotState.price}</h4>
            <p>{spotState.description}</p>
            <p>Number of guests: {spotState.num_of_guests}</p>
            <p>Number of beds: {spotState.num_of_beds}</p>
            <p>Number of baths: {spotState.num_of_baths}</p>

            <div>
                <CreateBooking />
            </div>

            <div>
                <h3>Reviews</h3>
                {spotState.Reviews?.map(review => {
                    return(
                        <div>
                            <p>Rating: {review.rating}</p>
                            <p>{review.content}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}


export default ViewAllSpots;

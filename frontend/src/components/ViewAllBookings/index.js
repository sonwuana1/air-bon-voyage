import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBookings } from '../../store/booking';


const ViewAllBookings = () => {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => Object.values(state.booking))
    console.log('BOOKING STATE', bookingState)

    useEffect(() => {
        dispatch(getAllBookings())
    }, [dispatch])

    return (
        <div>
            <h2>ALL BOOKINGS: </h2>
            {bookingState?.map(obj => {
                return(
                    <div>
                        <Link to={`/bookings/${obj.id}`}>{obj.start_date} to {obj.end_date}</Link>
                    </div>
                )
            })}
        </div>
    )

}


export default ViewAllBookings;

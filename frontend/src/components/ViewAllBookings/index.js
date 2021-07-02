import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBookings } from '../../store/booking';


const ViewAllBookings = () => {
    const dispatch = useDispatch();
    const bookingState = useSelector(state => state.booking)
    // console.log('BOOKING STATE', bookingState)

    useEffect(() => {
        dispatch(getAllBookings())
    }, [dispatch])

    return (
        <div>
            <h2>ALL BOOKINGS</h2>
        </div>
    )

}


export default ViewAllBookings;

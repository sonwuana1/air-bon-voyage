import { csrfFetch } from './csrf';


const LOAD_BOOKING = 'booking/LOAD';
const ADD_ONE_BOOKING = 'booking/ADD_ONE_BOOKING';



const load = bookings => ({
    type: LOAD_BOOKING,
    bookings,
});

const addOneBOOKING = booking => ({
    type: ADD_ONE_BOOKING,
    booking,
});



export const getAllBookings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`);

    if (response.ok) {
      const data = await response.json();
    //   console.log('DATAAAAAAAAA', data)
      dispatch(load(data));
    }
    return response;
};


export const getOneBooking = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${id}`);

    if (response.ok) {
      const data = await response.json();
    //   console.log('DATAAAAAAAAA', data)
      dispatch(addOneBOOKING(data));
    }
    return response;
}


export const createBooking = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    if (response.ok) {
        const newData = await response.json();
        dispatch(addOneBOOKING(newData));
        return newData;
    }
}


export const updateBooking = (id, data) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const updatedBooking = await response.json();
      dispatch(addOneBOOKING(updatedBooking));
      return updatedBooking;
    }
  };



const initialState = {}

const bookingReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_BOOKING:
            newState = { ...state };
            action.bookings.forEach(booking => {
                newState[booking.id] = booking;
            })
            return newState;
        case ADD_ONE_BOOKING:
            if (!state[action.booking.id]) {
                const newState = { ...state, ...action.booking }
                return newState;
            }
            return {
                ...state, ...state[action.booking.id], ...action.booking
            }
        default:
            return state;
    }
}


export default bookingReducer;

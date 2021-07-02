import { csrfFetch } from './csrf';


const LOAD_REVIEW = 'review/LOAD_REVIEW';


const load = reviews => ({
    type: LOAD_REVIEW,
    reviews,
});


export const getAllReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`);

    if (response.ok) {
      const data = await response.json();
    //   console.log('DATAAAAAAAAA', data)
      dispatch(load(data));
    }
    return response;
};



const initialState = {}

const reviewReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEW:
            newState = { ...state };
            action.reviews.forEach(review => {
                newState[review.id] = review;
            })
            return newState;
        default:
            return state;
    }
}


export default reviewReducer;

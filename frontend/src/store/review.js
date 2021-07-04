import { csrfFetch } from './csrf';


const LOAD_REVIEW = 'review/LOAD_REVIEW';
const ADD_ONE_REVIEW = 'review/ADD_ONE_REVIEW';


const load = reviews => ({
    type: LOAD_REVIEW,
    reviews,
});

const addOneReview = review => ({
    type: ADD_ONE_REVIEW,
    review,
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


export const getOneReview = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${id}`);

    if (response.ok) {
      const data = await response.json();
    //   console.log('DATAAAAAAAAA', data)
      dispatch(addOneReview(data));
    }
    return response;
}


export const editReview = (id, data) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const editedReview = await response.json();
      dispatch(addOneReview(editedReview));
      return editedReview;
    }
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
        case ADD_ONE_REVIEW:
            if (!state[action.review.id]) {
                const newState = { ...state, ...action.review }
                return newState;
            }
            return {
                ...state, ...state[action.review.id], ...action.review
            }
        default:
            return state;
    }
}


export default reviewReducer;

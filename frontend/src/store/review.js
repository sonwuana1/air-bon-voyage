import { csrfFetch } from './csrf';


const LOAD_REVIEW = 'review/LOAD_REVIEW';
const LOAD_REVIEWS_BY_SPOTID ="reviews/LOAD_REVIEWS_BY_SPOTID";
const ADD_ONE_REVIEW = 'review/ADD_ONE_REVIEW';
const REMOVE_ONE_REVIEW = 'review/REMOVE_ONE_REVIEW';



const load = (reviews, spot_id) => ({
    type: LOAD_REVIEW,
    reviews,
    spot_id,
});

const loadReviewsBySpotIdActionCreator = (reviews) => ({
  type:LOAD_REVIEWS_BY_SPOTID,
  payload:reviews,
});

const addOneReview = review => ({
    type: ADD_ONE_REVIEW,
    review,
});

const removeReview = (id) => ({
  type: REMOVE_ONE_REVIEW,
  id,
});


export const getAllReviews = (id) => async (dispatch) => {
    console.log('IDDDDDDDD', id)
    const response = await csrfFetch(`/api/reviews/spots/${id}`);
    console.log('RESPONSEEEEEE', response)

    if (response.ok) {
      const data = await response.json();
      console.log('DATAAAAAAAAA', data)
      dispatch(load(data, id));
    }
    return response;
};


export const fetchReviewsBySpotId = (spot_id) => async (dispatch) => {
  console.log('SPOTIDDDDD', spot_id)
  const response = await fetch(`/api/reviews/spots/${spot_id}`)

  const responseObject = await response.json();

  if (responseObject.errors) {
    return responseObject;
  }

  dispatch(loadReviewsBySpotIdActionCreator(responseObject));

}


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


export const createReview = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  if (response.ok) {
      const newData = await response.json();
      dispatch(addOneReview(newData));
      return newData;
  }
}


export const deleteReview = (id) => async (dispatch) => {
  console.log('IDDDDDDD', id)
  const response = await csrfFetch(`/api/reviews/${id}`, {
      method: 'delete',
    })

    if (response.ok) {
      const data = await response.json();
      dispatch(removeReview(data.id));
      return data;
    }
}



const initialState = {}

const reviewReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEW:
            newState = { ...state };
            // console.log('ACTION', action)
            action.reviews.forEach(review => {
                newState[review.id] = review;
            })
            return newState;
        case LOAD_REVIEWS_BY_SPOTID:
          newState = {...state};
          console.log(action.payload)
          // newState.review = action.payload;
          action.payload.forEach(review => {
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
        case REMOVE_ONE_REVIEW:
            newState = { ...state }
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}


export default reviewReducer;

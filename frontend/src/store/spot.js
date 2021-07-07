import { csrfFetch } from './csrf';


const LOAD_SPOT = 'spot/LOAD';
const ADD_ONE_SPOT = 'spot/ADD_ONE_SPOT';
const LOAD_REVIEWS_BY_SPOTID ="reviews/LOAD_REVIEWS_BY_SPOTID";



const load = (spots) => ({
    type: LOAD_SPOT,
    spots,
});

const addOneSpot = (spot, reviews) => ({
    type: ADD_ONE_SPOT,
    spot,
    reviews
});

const loadReviewsBySpotIdActionCreator = (reviews) => ({
  type:LOAD_REVIEWS_BY_SPOTID,
  payload:reviews,
});



export const getAllSpots = () => async dispatch => {
    const response = await csrfFetch(`/api/spots`);

    if (response.ok) {
      const data = await response.json();
      // console.log('DATAAAAAAAAA', data)
      dispatch(load(data));
    }
    return response;
};

export const getOneSpot = (id) => async dispatch => {
  // console.log('SPOTS_ID', id)
  const response = await csrfFetch(`/api/spots/${id}`);

  if (response.ok) {
    const data = await response.json();
    // console.log('DATAAAAAAAAA', data)
    dispatch(addOneSpot(data, data?.Reviews));
  }
  return response;
}


// export const fetchReviewsBySpotId = (spot_id) => async (dispatch) => {
//   console.log('SPOTIDDDDD', spot_id)
//   const response = await fetch(`/api/reviews/spots/${spot_id}`)

//   const responseObject = await response.json();

//   if (responseObject.errors) {
//     return responseObject;
//   }

//   dispatch(loadReviewsBySpotIdActionCreator(responseObject));

// }




const initialState = { };

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_SPOT:
        newState = { ...state };
        action.spots.forEach(spot => {
            newState[spot.id] = spot;
        });
        return newState;
    case ADD_ONE_SPOT:
        // if (!state[action.spot.id]) {
        //     const newState = { ...state, [action.spot.id]: action.spot }
        //     return newState;
        // }
        newState = {}
        action?.reviews?.forEach(review => {
          //  console.log(review)
            newState[review?.id] = review;
        })
        console.log('NEWSTATE', newState)
      //  return newState;
        // console.log({...state})
        return {
            ...state, ...state[action.spot?.id], ...action.spot, review: {
              newState
            }
        }
        // newState = { ...state };
        // newState.spot = action.payload;
        // return newState;
      // case LOAD_REVIEWS_BY_SPOTID:
      //     // newState = { ...state };
      //     // // console.log('ACTION', action)
      //     // action?.reviews?.forEach(review => {
      //     //     console.log(review)
      //     //     newState[review.id] = review;
      //     // })
      //     // return newState;

      //     newState = {...state};
      //     console.log(newState)
      //     newState.review = action.payload;
      //     return newState;


    default:
      return state;
  }
};

export default spotReducer;

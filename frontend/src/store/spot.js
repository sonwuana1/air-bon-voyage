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
        // return {
        //     ...state, ...state[action.spot?.id], ...action.spot
        // }
        newState = { ...state };
        newState[action.spot.id] = action.spot;
        return newState;

    default:
      return state;
  }
};

export default spotReducer;

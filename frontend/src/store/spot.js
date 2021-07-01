import { csrfFetch } from './csrf';


const LOAD_SPOT = 'spot/LOAD';


const load = spots => ({
    type: LOAD_SPOT,
    spots,
});



export const getAllSpots = () => async dispatch => {
    const response = await csrfFetch(`/api/spots`);

    if (response.ok) {
      const data = await response.json();
      console.log('DATAAAAAAAAA', data)
      dispatch(load(data));
    }
    return response;
};




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

    default:
      return state;
  }
};

export default spotReducer;

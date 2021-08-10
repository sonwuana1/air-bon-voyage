import { csrfFetch } from './csrf';


const LOAD_IMAGE = 'image/LOAD';
const ADD_ONE_IMAGE = 'image/ADD_ONE_IMAGE';


const load = (images) => ({
    type: LOAD_IMAGE,
    images,
});

const addOneImage = (image) => ({
    type: ADD_ONE_IMAGE,
    image,
});


export const getAllImages = () => async dispatch => {
    const response = await csrfFetch(`/api/images`);

    if (response.ok) {
      const data = await response.json();
      // console.log('DATAAAAAAAAA', data)
      dispatch(load(data));
    }
    return response;
};

export const getOneImage = (id) => async dispatch => {
  const response = await csrfFetch(`/api/images/${id}`);

  if (response.ok) {
    const data = await response.json();
    // console.log('DATAAAAAAAAA', data)
    dispatch(addOneImage(data));
  }
  return response;
}



const initialState = { };

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_IMAGE:
        newState = { ...state };
        action.images.forEach(image => {
            newState[image.id] = image;
        });
        return newState;
    case ADD_ONE_IMAGE:
        // if (!state[action.spot.id]) {
        //     const newState = { ...state, [action.spot.id]: action.spot }
        //     return newState;
        // }
        return {
            ...state, ...state[action.image?.id], ...action.image
        }
        // newState = { ...state };
        // newState.spot = action.payload;
        // return newState;

    default:
      return state;
  }
};

export default imageReducer;

import { csrfFetch } from './csrf';
import { useDispatch } from 'react-redux';

const LOAD = 'images/LOAD';
const LOAD_COMMENTS = 'images/LOAD_COMMENTS'
const ADD_ONE = 'images/ADD_ONE';
const REMOVE_IMAGE = 'images/REMOVE_IMAGE';

const load = images => ({
  type: LOAD,
  images
});

const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
})

const addOneImage = newImage => ({
  type: ADD_ONE,
  newImage
});

const removeImage = imageId => ({
  type: REMOVE_IMAGE,
  imageId
});

export const getImages = () => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/images`);
  if (response.ok) {
    const images = await response.json();
    dispatch(load(images));
  }
  return response
};

export const getOneImage = (id) => async dispatch => {
  const response = await csrfFetch(`/api/images/${id}`);
  if (response.ok) {
    const oneImage = await response.json();
    dispatch(addOneImage(oneImage));
  }
}

export const createImage = (formData) => async (dispatch, getState) => {
  const response = await csrfFetch('/api/images', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(formData)
  })
  const newImage = await response.json();
  dispatch(addOneImage(newImage))
  return newImage
}

export const getImageComments = (imageId) => async dispatch => {
  const response = await csrfFetch(`/api/images/${imageId}/comments`);

  if (response.ok) {
    const comments = await response.json();
    dispatch(loadComments(comments));
  }
};

export const editImage = ({imageId, imageUrl, title, description}) => async dispatch => {
  const response = await csrfFetch(`/api/images/${imageId}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({imageId, imageUrl, title, description})
  })
  const editedImage = await response.json();
  dispatch(addOneImage(editedImage))
  return editedImage
};

export const deleteImage = (imageId) => async dispatch => {
  const response = await csrfFetch(`/api/images/${imageId}`, {
    method: 'DELETE'
  });

  dispatch(removeImage(imageId));
  return response;
};


// const sortImages = (images) => {
//   return images.sort((imageA, imageB) => {
//     return imageA.number - imageB.number;
//   }).map((image) => image.id);
// };

// const initialState = { user: null };

// const sessionReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case SET_USER:
//       newState = Object.assign({}, state);
//       newState.user = action.payload;
//       return newState;
//     case REMOVE_USER:
//       newState = Object.assign({}, state);
//       newState.user = null;
//       return newState;
//     default:
//       return state;
//   }
// };

const initialState = {
  images: {}
};

const imagesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = {...state};
      const images = {}
      action.images.forEach((image) => images[image.id] = image)
      newState.images = images;
      return newState;
    case LOAD_COMMENTS:
      return {
        ...state,
        [action.imageId]: {
          ...state[action.imageId],
          // comments: action.comments.map(comment => comment.id)
        }
      };
    case ADD_ONE:
      newState = {...state}
      newState.images = {...newState.images, [action.newImage.id]: action.newImage}
      return newState;
    case REMOVE_IMAGE:
      newState = {...state};
      delete newState[action.imageId];
      return newState
    default:
      return state;
  }
}

export default imagesReducer;

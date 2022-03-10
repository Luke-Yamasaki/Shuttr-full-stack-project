import { csrfFetch } from './csrf';

const LOAD = 'images/LOAD';
const LOAD_TAGS = 'images/LOAD_TAGS';
const ADD_ONE = 'images/ADD_ONE';

const load = list => ({
  type: LOAD,
  list
});

const loadTAGS = TAGS => ({
  type: LOAD_TAGS,
  TAGS
});

const addOneimages = images => ({
  type: ADD_ONE,
  images
});

export const getimages = () => async dispatch => {
  const response = await fetch(`/api/images`);
  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export const getOneimages = (id) => async dispatch => {
  const response = await fetch(`/api/images/${id}`);
  if (response.ok) {
    const oneimages = await response.json();
    dispatch(addOneimages(oneimages));
  }
}

export const createimages = (data) => async dispatch => {
  const response = await fetch('/api/images', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  const newimages = await response.json();
  dispatch(addOneimages(newimages))
  return newimages
}

export const getimagesTAGS = () => async dispatch => {
  const response = await fetch(`/api/images/TAGS`);

  if (response.ok) {
    const TAGS = await response.json();
    dispatch(loadTAGS(TAGS));
  }
};

export const editimages = (data) => async dispatch => {
  const response = await fetch(`/api/images/${data.id}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  const editimages = await response.json();
  dispatch(addOneimages(editimages))
  return editimages
}

const initialState = {
  list: [],
  TAGS: []
};

const sortList = (list) => {
  return list.sort((imagesA, imagesB) => {
    return imagesA.number - imagesB.number;
  }).map((images) => images.id);
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allimages = {};
      action.list.forEach(images => {
        allimages[images.id] = images;
      });
      return {
        ...allimages,
        ...state,
        list: sortList(action.list)
      };
    case LOAD_TAGS:
      return {
        ...state,
        TAGS: action.TAGS
      };
    case ADD_ONE:
      if (!state[action.images.id]) {
        const newState = {
          ...state,
          [action.images.id]: action.images
        };
        const imagesList = newState.list.map(id => newState[id]);
        imagesList.push(action.images);
        newState.list = sortList(imagesList);
        return newState;
      }
      return {
        ...state,
        [action.images.id]: {
          ...state[action.images.id],
          ...action.images
        }
      };
    case LOAD_ITEMS:
      return {
        ...state,
        [action.imagesId]: {
          ...state[action.imagesId],
          items: action.items.map(item => item.id)
        }
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.imagesId]: {
          ...state[action.imagesId],
          items: state[action.imagesId].items.filter(
            (itemId) => itemId !== action.itemId
          )
        }
      };
    case ADD_ITEM:
      console.log(action.item);
      return {
        ...state,
        [action.item.imagesId]: {
          ...state[action.item.imagesId],
          items: [...state[action.item.imagesId].items, action.item.id]
        }
      };
    default:
      return state;
  }
}

export default imagesReducer;

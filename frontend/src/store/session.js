import { csrfFetch } from './csrf';


//////////////////////////////////////////// Set or remove user
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

//////////////////////////////////////////// Set or remove action creator
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
//////////////////////////////////////////// Thunk action creators

export const login = (user) => async (dispatch) => {
  const { email, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session");
  const data = await res.json();
  dispatch(setUser(data.user));
  return res;
};

export const signup = (user) => async (dispatch) => {
  const { firstName, lastName, age, email, password, confirmPassword } = user;
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      firstName,
      lastName,
      age: age,
      email,
      password,
      confirmPassword
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};


//////////////////////////////////////////// Session reducer
const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;

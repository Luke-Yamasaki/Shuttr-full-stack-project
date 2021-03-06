import { csrfFetch } from './csrf';

const LOAD = 'users/LOAD';
const LOAD_ONE = 'users/LOAD_ONE';
const ADD_ONE = 'users/ADD_ONE';
const REMOVE_USER = 'users/REMOVE_USER';

const load = users => ({
  type: LOAD,
  users
});

const loadOne = user => ({
  type: LOAD_ONE,
  user
})

const addOneUser = newUser => ({
  type: ADD_ONE,
  newUser
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});

export const getUsers = () => async (dispatch) => {
  const response = await csrfFetch(`/api/users`);
  if (response.ok) {
    const users = await response.json()
    dispatch(load(users));
  }
  return response
};

export const getOneUser = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${id}`);
  if (response.ok) {
    const oneUser = await response.json();
    dispatch(loadOne(oneUser));
  }
  return response
};

// export const createUser = (userData) => async (dispatch, getState) => {
//   const response = await csrfFetch('/api/users', {
//     method: 'POST',
//     headers: {'Content-Type':'application/json'},
//     body: JSON.stringify(userData)
//   })
//   const newUser = await response.json();
//   dispatch(addOneUser(newUser))
//   return newUser
// }

export const editUser = ({userId, firstName, lastName, username, email, profileImageUrl, password}) => async dispatch => {
  const response = await csrfFetch(`/api/users/${userId}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({firstName, lastName, username, email, profileImageUrl, password})
  })
  const editedUser = await response.json();
  dispatch(addOneUser(editedUser))
  return editedUser
};

export const deleteuser = (userId) => async dispatch => {
  const response = await csrfFetch(`/api/users/${userId}`, {
    method: 'DELETE'
  });

  dispatch(removeUser(userId));
  return response;
};


// const sortusers = (users) => {
//   return users.sort((userA, userB) => {
//     return userA.number - userB.number;
//   }).map((user) => user.id);
// };

const initialState = {
  users: {}
};

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = {...state};
      const users = {}
      action.users.forEach((user) => users[user.id] = user)
      newState.users = users;
      return newState;
    case LOAD_ONE:
      newState = {...state}
      const userObj = {};
      userObj[action.user.id] = action.user;
      newState.users = action.user;
      return newState;
    case ADD_ONE:
      newState = {...state}
      newState.users[action.newUser.id] = action.newUser;
      return newState;
    case REMOVE_USER:
      newState = {...state};
      delete newState[action.userId];
      return newState
    default:
      return state;
  }
}

export default usersReducer;

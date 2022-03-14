import { csrfFetch } from './csrf';

const LOAD = 'comments/LOAD';
const LOAD_ALL = 'comments/LOAD_ALL';
const LOAD_ONE = 'comments/LOAD_ONE';
const ADD_ONE = 'comments/ADD_ONE';
const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

const load = comments => ({
  type: LOAD,
  comments
});

const loadAll = comments => ({
  type: LOAD_ALL,
  comments
})

const loadOne = comment => ({
  type: LOAD_ONE,
  comment
})

const addOneComment = newComment => ({
  type: ADD_ONE,
  newComment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const getComments = (imageId) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/images/${imageId}`);
  if (response.ok) {
    const imageData = await response.json();
    dispatch(load(imageData.comments));
  }
  return response
};

export const getAllComments = () => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/images/:id/comments/all`);
  if (response.ok) {
    const comments = await response.json();
    dispatch(loadAll(comments));
  }
  return response
};

export const getOneComment = (id) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/comments/${id}`);
  if (response.ok) {
    const oneComment = await response.json();
    dispatch(loadOne(oneComment));
  }
  return response
}

export const createComment = (commentData) => async (dispatch, getState) => {
  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(commentData)
  })
  const newComment = await response.json();
  dispatch(addOneComment(newComment))
  return newComment
}

export const editComment = ({userId, imageId, commentId, content}) => async (dispatch, getState) => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({userId, imageId, commentId, content})
  })
  const newComment = await response.json();
  dispatch(addOneComment(newComment))
  return newComment
};

export const deleteComment = (commentId) => async dispatch => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE'
  });

  dispatch(removeComment(commentId));
  return response;
};


// const sortcomments = (comments) => {
//   return comments.sort((commentA, commentB) => {
//     return commentA.number - commentB.number;
//   }).map((comment) => comment.id);
// };

const initialState = {
  comments: {}
};

const commentsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = {...state};
      const comments = {}
      action.comments.forEach((comment) => comments[comment.id] = comment)
      newState.comments = comments;
      return newState;
    case LOAD_ALL:
      newState = {...state};
      const commentsObj = {}
      action.comments.forEach((comment) => commentsObj[comment.id] = comment)
      newState.comments = comments;
      return newState;
    case LOAD_ONE:
      newState = {...state}
      const commentObj = {};
      commentObj[action.comment.id] = action.comment;
      newState.comments = action.comment;
      return newState;
    case ADD_ONE:
      newState = {...state}
      const comment = {};
      comment[action.newComment.id] = action.newComment;
      newState.comments[action.newComment.id] = action.newComment;
      return newState;
    case REMOVE_COMMENT:
      newState = {...state};
      delete newState[action.commentId];
      return newState
    default:
      return state;
  }
}

export default commentsReducer;

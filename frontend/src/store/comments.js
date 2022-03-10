export const LOAD_COMMENTS = "comments/LOAD_COMMENTS";
export const UPDATE_COMMENT = "comments/UPDATE_COMMENTS";
export const REMOVE_COMMENT = "comments/REMOVE_COMMENTS";
export const ADD_COMMENT = "comments/ADD_COMMENTS";

const load = (comments, imageId) => ({
  type: LOAD_COMMENTS,
  comments,
  imageId
});

const update = (comment) => ({
  type: UPDATE_COMMENTS,
  comment
});

const add = (newComment) => ({
  type: ADD_COMMENT,
  newComment
});

const remove = (commentId, imageId) => ({
  type: REMOVE_COMMENTS,
  commentId,
  imageId
});

export const getComments = (imageId) => async dispatch => {
  const response = await fetch(`/api/images/${imageId}/comments`, );
  if(response.ok) {
    const commentsList = await response.json();
    dispatch(load(commentsList, imageId))
  }
}

export const addComment = (comment, imageId) => async dispatch => {
  const response = await fetch(`/api/images/${imageId}/comments`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(comment)
  });
  if(response.ok) {
    const newComment = await response.json();
    dispatch(add(newComment))
  }
}

export const editComment = (comment) => async dispatch => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(comment)
  });
  if(response.ok) {
    const editedComment = await response.json();
    dispatch(update(editedComment))
  }
}

const initialState = {};

const commentsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_COMMENTS:
        return { ...state, comments: [...action.comments]};
        case REMOVE_COMMENT:
        newState = { ...state };
        delete newState[action.commentId];
        return newState;
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, action.newComment] };

        case UPDATE_COMMENT:
        return {
            ...state,
            [action.comments.id]: action.comments
        };
        default:
        return state;
    }
};

export default commentsReducer;

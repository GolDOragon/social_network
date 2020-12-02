export const ADD_POST = 'ADD_POST';
export const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const id = state.posts.length;
      const message = state.textareaValue;
      let post = {
        id,
        message,
        likeCount: 0,
      };

      return {
        ...state,
        posts: state.posts.concat(post),
        textareaValue: '',
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        textareaValue: action.payload,
      };
    default:
      return state;
  }
};

export const addPostAction = () => ({ type: ADD_POST });
export const updatePostTextAction = (text) => ({
  type: UPDATE_POST_TEXT,
  payload: text,
});
export default profileReducer;

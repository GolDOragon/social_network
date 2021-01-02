import { usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
  textareaValue: '',
  profile: null,
  isFetching: false,
  posts: [
    {
      id: 0,
      message: 'Hi',
      likeCount: 22,
    },
    {
      id: 0,
      message: 'How are you?',
      likeCount: 10,
    },
    {
      id: 0,
      message: "I'm fine, thanks",
      likeCount: 13,
    },
  ],
};

const profileReducer = (state = initialState, action) => {
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

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
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
export const setUserProfileAction = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});
export const toggleFetchingAction = (status) => ({
  type: TOGGLE_FETCHING,
  payload: status,
});

export const setUserProfileThunk = (id) => (dispatch) => {
  dispatch(toggleFetchingAction(true));
  usersAPI.getProfile(id).then((data) => {
    dispatch(setUserProfileAction(data));
    dispatch(toggleFetchingAction(false));
  });
};
export default profileReducer;

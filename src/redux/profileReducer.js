import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
  textareaValue: '',
  profile: null,
  isFetching: false,
  status: null,
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
        textareaValue: action.text,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.status,
      };

    default:
      return state;
  }
};

export default profileReducer;

export const profileAC = {
  addPost: () => ({ type: ADD_POST }),
  updatePostText: (text) => ({
    type: UPDATE_POST_TEXT,
    text,
  }),
  setUserProfile: (profile) => ({
    type: SET_USER_PROFILE,
    profile,
  }),
  setUserStatus: (status) => ({
    type: SET_USER_STATUS,
    status,
  }),
  toggleFetching: (status) => ({
    type: TOGGLE_FETCHING,
    status,
  }),
};

export const setUserProfileThunk = (id) => (dispatch) => {
  dispatch(profileAC.toggleFetching(true));
  profileAPI.getProfile(id).then((data) => {
    dispatch(profileAC.setUserProfile(data));
    dispatch(profileAC.toggleFetching(false));
  });
};

export const getUserStatusThunk = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((status) => {
    dispatch(profileAC.setUserStatus(status));
  });
};
export const updateUserStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(profileAC.setUserStatus(status));
    }
  });
};

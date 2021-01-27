import { authAPI } from '../api/api';

const SET_USER_DATA = 'socialMedia/auth/SET_USER_DATA';
const TOGGLE_FETCHING = 'socialMedia/auth/TOGGLE_FETCHING';

const initialState = {
  userId: null,
  email: null,
  login: null,
  messages: [],
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
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

export default authReducer;

export const authAC = {
  setUserData: ({ id, email, login, isAuth = true }) => ({
    type: SET_USER_DATA,
    payload: {
      userId: id,
      email,
      login,
      isAuth,
    },
  }),
  toggleFetching: (status) => ({
    type: TOGGLE_FETCHING,
    payload: status,
  }),
};

export const authenticationThunk = () => async (dispatch) => {
  dispatch(authAC.toggleFetching(true));

  const data = await authAPI.authentication();

  if (data.resultCode === 0) {
    dispatch(authAC.setUserData({ ...data.data, isAuth: true }));
    dispatch(authAC.toggleFetching(false));

    return true;
  }
};

export const loginThunk = (userData) => async (dispatch) => {
  dispatch(authAC.toggleFetching(true));

  const data = await authAPI.login(userData);

  if (data.resultCode === 0) {
    dispatch(authenticationThunk());
    dispatch(authAC.toggleFetching(false));
  } else {
    throw data.messages[0];
  }
};

export const logoutThunk = () => async (dispatch) => {
  dispatch(authAC.toggleFetching(true));

  const data = await authAPI.logout();

  if (data.resultCode === 0) {
    dispatch(
      authAC.setUserData({
        id: null,
        email: null,
        login: null,
        isAuth: false,
      }),
    );
    dispatch(authAC.toggleFetching(false));
  }
};

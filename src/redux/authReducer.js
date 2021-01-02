import { authentication } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

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
        isAuth: true,
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

export const setUserDataAction = ({ id, email, login }) => ({
  type: SET_USER_DATA,
  payload: {
    userId: id,
    email,
    login,
  },
});

export const toggleFetchingAction = (status) => ({
  type: TOGGLE_FETCHING,
  payload: status,
});

export const authenticationThunk = () => (dispatch) => {
  dispatch(toggleFetchingAction(true));

  authentication().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserDataAction({ ...data.data }));
      dispatch(toggleFetchingAction(false));
    }
  });
};

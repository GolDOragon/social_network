import { authenticationThunk } from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: action.status,
      };

    default:
      return state;
  }
};

export const authAC = {
  setInitialized: (status) => ({
    type: SET_INITIALIZED,
    status,
  }),
};

export default appReducer;

export const initializeAppThunk = () => (dispatch) => {
  const result = dispatch(authenticationThunk());

  Promise.all([result]).then(() => {
    dispatch(authAC.setInitialized(true));
  });
};

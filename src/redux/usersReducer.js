export const UPDATE_SEARCHED_USER = 'UPDATE_SEARCHED_USER';
export const SET_USERS = 'SET_USERS';
export const SUBSCRIBE_TO_USER = 'SUBSCRIBE_TO_USER';
export const UNSUBSCRIBE_FROM_USER = 'UNSUBSCRIBE_FROM_USER';

const initialState = {
  pageTitle: 'Find your friends',
  searchedUser: '',
  userList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        userList: [...state.userList, ...action.payload],
      };
    case UPDATE_SEARCHED_USER:
      return {
        ...state,
        searchedUser: action.payload,
      };

    case SUBSCRIBE_TO_USER:
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id !== action.payload) return user;
          return {
            ...user,
            followed: true,
          };
        }),
      };

    case UNSUBSCRIBE_FROM_USER:
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id !== action.payload) return user;
          return {
            ...user,
            followed: false,
          };
        }),
      };

    default:
      return state;
  }
};

export default usersReducer;

export const setUsersAction = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const updateSearchedUserAction = (text) => ({
  type: UPDATE_SEARCHED_USER,
  payload: text,
});

export const subscribeToUserAction = (userId) => ({
  type: SUBSCRIBE_TO_USER,
  payload: userId,
});

export const unsubscribeFromUserAction = (userId) => ({
  type: UNSUBSCRIBE_FROM_USER,
  payload: userId,
});

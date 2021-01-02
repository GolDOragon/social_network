const UPDATE_SEARCHED_USER = 'UPDATE_SEARCHED_USER';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SUBSCRIBE_TO_USER = 'SUBSCRIBE_TO_USER';
const UNSUBSCRIBE_FROM_USER = 'UNSUBSCRIBE_FROM_USER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_SUBSCRIBING = 'SET_SUBSCRIBING';

const initialState = {
  userList: [],
  pageSize: 5,
  currentPage: 1,
  usersTotalCount: 0,
  pageTitle: 'Find your friends',
  searchedUser: '',
  isFetching: false,
  subscriptions: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        userList: action.payload,
      };

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        usersTotalCount: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    case SET_SUBSCRIBING:
      return {
        ...state,
        subscriptions: action.isFetching
          ? [...state.subscriptions, action.userId]
          : state.subscriptions.filter((id) => id !== action.userId),
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

export const setUsersTotalCountAction = (count) => ({
  type: SET_USERS_TOTAL_COUNT,
  payload: count,
});

export const setCurrentPageAction = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  payload: pageNumber,
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

export const toggleIsFetchingAction = (status) => ({
  type: TOGGLE_IS_FETCHING,
  payload: status,
});

export const setSubscribingAction = (isFetching, userId) => ({
  type: SET_SUBSCRIBING,
  isFetching,
  userId,
});
export const toggleSubscribingAction = (isFetching, userId) => ({
  type: SET_SUBSCRIBING,
  isFetching,
  userId,
});

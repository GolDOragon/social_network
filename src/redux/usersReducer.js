import { usersAPI } from '../api/api';
import { updateObjectInArray } from './utils/object-helpers';

const UPDATE_SEARCHED_USER = 'socialMedia/users/UPDATE_SEARCHED_USER';
const SET_USERS = 'socialMedia/users/SET_USERS';
const SET_USERS_TOTAL_COUNT = 'socialMedia/users/SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'socialMedia/users/SET_CURRENT_PAGE';
const SUBSCRIBE_TO_USER = 'socialMedia/users/SUBSCRIBE_TO_USER';
const UNSUBSCRIBE_FROM_USER = 'socialMedia/users/UNSUBSCRIBE_FROM_USER';
const TOGGLE_IS_FETCHING = 'socialMedia/users/TOGGLE_IS_FETCHING';
const SET_SUBSCRIBING = 'socialMedia/users/SET_SUBSCRIBING';

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
        userList: updateObjectInArray(state.userList, action.userId, 'id', {
          followed: true,
        }),
      };

    case UNSUBSCRIBE_FROM_USER:
      return {
        ...state,
        userList: updateObjectInArray(state.userList, action.userId, 'id', {
          followed: false,
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

export const usersAC = {
  setUsers: (users) => ({
    type: SET_USERS,
    payload: users,
  }),
  setUsersTotalCount: (count) => ({
    type: SET_USERS_TOTAL_COUNT,
    payload: count,
  }),
  setCurrentPage: (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    payload: pageNumber,
  }),
  updateSearchedUser: (text) => ({
    type: UPDATE_SEARCHED_USER,
    payload: text,
  }),
  subscribeToUser: (userId) => ({
    type: SUBSCRIBE_TO_USER,
    userId,
  }),
  unsubscribeFromUser: (userId) => ({
    type: UNSUBSCRIBE_FROM_USER,
    userId,
  }),
  toggleIsFetching: (status) => ({
    type: TOGGLE_IS_FETCHING,
    payload: status,
  }),

  setSubscribing: (isFetching, userId) => ({
    type: SET_SUBSCRIBING,
    isFetching,
    userId,
  }),
};

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(usersAC.toggleIsFetching(true));

  const data = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(usersAC.setUsers(data.items));
  dispatch(usersAC.setUsersTotalCount(data.totalCount));
  dispatch(usersAC.toggleIsFetching(false));
};

export const changePageThunk = (pageNumber, pageSize) => (dispatch) => {
  dispatch(usersAC.setCurrentPage(pageNumber));
  dispatch(getUsersThunk(pageNumber, pageSize));
};

const _followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator,
) => {
  dispatch(usersAC.setSubscribing(true, userId));

  const data = await apiMethod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(usersAC.setSubscribing(false, userId));
  }
};

export const subscribeThunk = (userId) => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.subscribe.bind(usersAPI),
    usersAC.subscribeToUser.bind(usersAC),
  );
};

export const unsubscribeThunk = (userId) => async (dispatch) => {
  _followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unsubscribe.bind(usersAPI),
    usersAC.unsubscribeFromUser.bind(usersAC),
  );
};

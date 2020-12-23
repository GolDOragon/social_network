import { connect } from 'react-redux';
import {
  setCurrentPageAction,
  setUsersAction,
  setUsersTotalCountAction,
  subscribeToUserAction,
  unsubscribeFromUserAction,
  updateSearchedUserAction
} from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  const { usersPage } = state;
  return {
    title: usersPage.pageTitle,
    pageSize: usersPage.pageSize,
    currentPage: usersPage.currentPage,
    searchedUser: usersPage.searchedUser,
    userList: usersPage.userList,
    usersTotalCount: usersPage.usersTotalCount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeText: (name) => {
    dispatch(updateSearchedUserAction(name));
  },
  subscribe: (userId) => {
    dispatch(subscribeToUserAction(userId));
  },
  unsubscribe: (userId) => {
    dispatch(unsubscribeFromUserAction(userId));
  },
  setUsers: (userList) => {
    dispatch(setUsersAction(userList));
  },
  setUsersTotalCount: (count) => {
    dispatch(setUsersTotalCountAction(count));
  },
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPageAction(pageNumber));
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

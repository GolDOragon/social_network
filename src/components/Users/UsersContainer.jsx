import { connect } from 'react-redux';
import {
  setUsersAction,
  subscribeToUserAction,
  unsubscribeFromUserAction,
  updateSearchedUserAction
} from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  const { pageTitle, searchedUser, userList } = state.usersPage;

  return {
    title: pageTitle,
    searchedUser,
    userList,
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
  getUsers: () => {
    dispatch(setUsersAction());
  },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

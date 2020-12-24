import Axios from 'axios';
import React from 'react';
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

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.userList.length !== 0) return;

    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    ).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  }

  handleChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
    ).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  };

  handleChangeSearchText = (text) => {};
  render = () => {
    return (
      <Users
        usersTotalCount={this.props.usersTotalCount}
        userList={this.props.userList}
        pageSize={this.props.pageSize}
        title={this.props.title}
        currentPage={this.props.currentPage}
        text={this.props.text}
        onChangePage={this.handleChangePage}
        onChangeText={this.props.onChangeText}
        onSubscribe={this.props.subscribe}
        onUnsubscribe={this.props.unsubscribe}
      />
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

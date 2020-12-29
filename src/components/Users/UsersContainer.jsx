import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentPageAction,
  setUsersAction,
  setUsersTotalCountAction,
  subscribeToUserAction,
  toggleIsFetchingAction,
  unsubscribeFromUserAction,
  updateSearchedUserAction
} from '../../redux/usersReducer';
import Preloader from '../atoms/Preloader/Preloader';
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
    isFetching: usersPage.isFetching,
  };
};

const mapDispatchToProps = {
  onChangeText: updateSearchedUserAction,
  subscribe: subscribeToUserAction,
  unsubscribe: unsubscribeFromUserAction,
  setUsers: setUsersAction,
  setUsersTotalCount: setUsersTotalCountAction,
  setCurrentPage: setCurrentPageAction,
  toggleIsFetching: toggleIsFetchingAction,
};

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.userList.length !== 0) return;

    this.props.toggleIsFetching(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      {
        withCredentials: true,
      },
    ).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
      this.props.toggleIsFetching(false);
    });
  }

  handleChangePage = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      {
        withCredentials: true,
      },
    ).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
      this.props.toggleIsFetching(false);
    });
  };

  handleChangeSearchText = (text) => {};
  render = () => {
    return (
      <>
        {this.props.isFetching && <Preloader />}
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
          isFetching={this.props.isFetching}
        />
      </>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

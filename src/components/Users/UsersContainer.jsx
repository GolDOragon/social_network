import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import {
  setCurrentPageAction,
  setSubscribingAction,
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
    subscriptions: usersPage.subscriptions,
  };
};

const mapDispatchToProps = {
  onChangeSearchText: updateSearchedUserAction,
  subscribe: subscribeToUserAction,
  unsubscribe: unsubscribeFromUserAction,
  setUsers: setUsersAction,
  setUsersTotalCount: setUsersTotalCountAction,
  setCurrentPage: setCurrentPageAction,
  toggleIsFetching: toggleIsFetchingAction,
  setSubscribing: setSubscribingAction,
};

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.userList.length !== 0) return;

    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  handleChangePage = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.setUsersTotalCount(data.totalCount);
      this.props.toggleIsFetching(false);
    });
  };

  handleSubscribe = (userId) => {
    this.props.setSubscribing(true, userId);

    usersAPI.subscribe(userId).then((data) => {
      if (data.resultCode === 0) {
        this.props.subscribe(userId);
        this.props.setSubscribing(false, userId);
      }
    });
  };

  handleUnsubscribe = (userId) => {
    this.props.setSubscribing(true, userId);

    usersAPI.unsubscribe(userId).then((data) => {
      if (data.resultCode === 0) {
        this.props.unsubscribe(userId);
        this.props.setSubscribing(false, userId);
      }
    });
  };

  handleChangeText = (text) => {
    this.props.onChangeSearchText(text);
  };

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
          isFetching={this.props.isFetching}
          subscriptions={this.props.subscriptions}
          subscribingToUser={this.props.subscribingToUser}
          onChangePage={this.handleChangePage}
          onChangeText={this.handleChangeText}
          onSubscribe={this.handleSubscribe}
          onUnsubscribe={this.handleUnsubscribe}
        />
      </>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

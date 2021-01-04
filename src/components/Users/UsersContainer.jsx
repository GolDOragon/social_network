import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  changePageThunk,
  getUsersThunk,
  subscribeThunk,
  unsubscribeThunk,
  updateSearchedUserAction
} from '../../redux/usersReducer';
import Preloader from '../atoms/Preloader/Preloader';
import withAuthRedirect from '../HOC/withAuthRedirect';
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
  onSubscribe: subscribeThunk,
  onUnsubscribe: unsubscribeThunk,
  getUsers: getUsersThunk,
  onChangePage: changePageThunk,
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  handleChangePage = (pageNumber) => {
    this.props.onChangePage(pageNumber, this.props.pageSize);
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
          subscriptions={this.props.subscriptions}
          onChangePage={this.handleChangePage}
          onChangeText={this.props.onChangeSearchText}
          onSubscribe={this.props.onSubscribe}
          onUnsubscribe={this.props.onUnsubscribe}
        />
      </>
    );
  };
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(UsersContainer);

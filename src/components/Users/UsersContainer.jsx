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
import usersSelectors from '../../redux/usersSelectors';
import Preloader from '../atoms/Preloader/Preloader';
import Users from './Users';

const mapStateToProps = (state) => ({
  title: usersSelectors.getTitle(state),
  pageSize: usersSelectors.getPageSize(state),
  currentPage: usersSelectors.getCurrentPage(state),
  searchedUser: usersSelectors.getSearchedUser(state),
  userList: usersSelectors.getUserList(state),
  usersTotalCount: usersSelectors.getUsersTotalCount(state),
  isFetching: usersSelectors.getIsFetching(state),
  subscriptions: usersSelectors.getSubscriptions(state),
});

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

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  UsersContainer,
);

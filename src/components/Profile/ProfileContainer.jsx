import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getUserStatusThunk,
  setUserProfileThunk,
  updateUserStatusThunk
} from '../../redux/profileReducer';
import Profile from './Profile';

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});
const mapDispatchToProps = {
  setUserProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk,
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 12567;
    this.props.setUserProfileThunk(userId);
    this.props.getUserStatusThunk(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatusThunk}
      />
    );
  }
}

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainer);

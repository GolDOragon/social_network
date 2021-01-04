import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setUserProfileThunk } from '../../redux/profileReducer';
import withAuthRedirect from '../HOC/withAuthRedirect';
import Profile from './Profile';

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
const mapDispatchToProps = {
  setUserProfile: setUserProfileThunk,
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.setUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainer);

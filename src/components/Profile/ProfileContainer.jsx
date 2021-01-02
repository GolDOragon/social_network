import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { setUserProfileAction } from '../../redux/profileReducer';
import Profile from './Profile';

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });
const mapDispatchToProps = {
  setUserProfile: setUserProfileAction,
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    usersAPI.getProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithUrlDataContainerComponent);
import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfileAction } from '../../redux/profileReducer';
import Profile from './Profile';

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });
const mapDispatchToProps = {
  setUserProfile: setUserProfileAction,
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then(
      (res) => {
        this.props.setUserProfile(res.data);
      },
    );
  }

  render() {
    return <Profile {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

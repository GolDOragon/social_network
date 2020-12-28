import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {
  setUserDataAction,
  toggleFetchingAction
} from '../../redux/authReducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = {
  setAuthUserData: setUserDataAction,
  toggleFetching: toggleFetchingAction,
};

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    }).then((res) => {
      if (res.data.resultCode === 0) {
        this.props.setAuthUserData({ ...res.data.data });
        this.props.toggleFetching(false);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

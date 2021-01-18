import React from 'react';
import { connect } from 'react-redux';
import {
  authenticationThunk, logoutThunk
} from '../../redux/authReducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    loginName: state.auth.login,
  };
};
const mapDispatchToProps = {
  authentication: authenticationThunk,
  logout: logoutThunk
};

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authentication();
  }
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

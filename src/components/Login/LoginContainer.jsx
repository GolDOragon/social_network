import React from 'react';
import { connect } from 'react-redux';
import { authenticationThunk, loginThunk } from '../../redux/authReducer';
import Login from './Login';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = {
  authentication: authenticationThunk,
  login: loginThunk,
};

class LoginContainer extends React.Component {
  componentDidMount() {
    // this.props.authentication();
  }
  render() {
    return <Login {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

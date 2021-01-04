import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const getDisplayName = (component) =>
  component.displayName || component.name || 'Component';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default function withAuthRedirect(WrappedComponent) {
  class withAuth extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;

      return <WrappedComponent {...this.props} />;
    }
  }
  withAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return connect(mapStateToProps)(withAuth);
}

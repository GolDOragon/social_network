import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import Settings from './Settings';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

class SettingsContainer extends React.Component {
  render() {
    return <Settings {...this.props} />;
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(SettingsContainer);

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import Music from './Music';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

class MusicContainer extends React.Component {
  render() {
    return <Music {...this.props} />;
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(MusicContainer);

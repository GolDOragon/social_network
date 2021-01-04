import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../HOC/withAuthRedirect';
import News from './News';

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

class NewsContainer extends React.Component {
  render() {
    return <News {...this.props} />;
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(NewsContainer);

import { connect } from 'react-redux';
import { compose } from 'redux';
import { dialoguesAC } from '../../redux/dialoguesReducer';
import withAuthRedirect from '../HOC/withAuthRedirect';
import Dialogues from './Dialogues';

const mapStateToProps = (state) => {
  const { dialoguesPage } = state;

  return {
    companions: dialoguesPage.companions,
    companionAvatar: dialoguesPage.companionAvatar,
    messages: dialoguesPage.messages,
  };
};

const mapDispatchToProps = {
  sendMessage: dialoguesAC.sendMessage,
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogues);

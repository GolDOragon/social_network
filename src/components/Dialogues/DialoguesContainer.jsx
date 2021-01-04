import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  sendMessageAction,
  updateMessageAction
} from '../../redux/dialoguesReducer';
import withAuthRedirect from '../HOC/withAuthRedirect';
import Dialogues from './Dialogues';

const mapStateToProps = (state) => {
  const { dialoguesPage } = state;

  return {
    title: dialoguesPage.title,
    companions: dialoguesPage.companions,
    companionAvatar: dialoguesPage.companionAvatar,
    messages: dialoguesPage.messages,
    newMessageText: dialoguesPage.newMessageText,
  };
};

const mapDispatchToProps = {
  sendMessage: sendMessageAction,
  updateMessageText: updateMessageAction,
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogues);

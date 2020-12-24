import { connect } from 'react-redux';
import {
  sendMessageAction,
  updateMessageAction
} from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';

const mapStateToProps = (state) => {
  const {
    title,
    companionAvatar,
    messages,
    companions,
    newMessageText,
  } = state.dialoguesPage;

  return {
    title,
    companions,
    companionAvatar,
    messages,
    newMessageText,
  };
};

const mapDispatchToProps = {
  sendMessage: sendMessageAction,
  updateMessageText: updateMessageAction,
};

const DialoguesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dialogues);

export default DialoguesContainer;

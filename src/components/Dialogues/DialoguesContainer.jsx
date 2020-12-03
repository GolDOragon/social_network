import React from 'react';
import {
  sendMessageAction,
  updateMessageAction
} from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';

const DialoguesContainer = (props) => {
  const {
    messages,
    companions,
    newMessageText,
  } = props.store.getState().dialoguesPage;

  const avatar = {
    iconAltName: 'avatar',
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
    name: 'Jason Bourne',
    status: 'online',
  };

  const handleSendMessage = () => {
    props.store.dispatch(sendMessageAction());
  };
  const handleUpdateMessageText = (newText) => {
    props.store.dispatch(updateMessageAction(newText));
  };

  return (
    <Dialogues
      title="All messages"
      companions={companions}
      companionAvatar={avatar}
      messages={messages}
      newMessageText={newMessageText}
      sendMessage={handleSendMessage}
      updateMessageText={handleUpdateMessageText}
    />
  );
};

export default DialoguesContainer;

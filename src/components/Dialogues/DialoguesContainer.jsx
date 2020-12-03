import React from 'react';
import {
  sendMessageAction,
  updateMessageAction
} from '../../redux/dialoguesReducer';
import StoreContext from '../../redux/StoreContext';
import Dialogues from './Dialogues';

const DialoguesContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const {
          messages,
          companions,
          newMessageText,
        } = store.getState().dialoguesPage;

        const avatar = {
          iconAltName: 'avatar',
          iconSrc:
            'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
          name: 'Jason Bourne',
          status: 'online',
        };

        const handleSendMessage = () => {
          store.dispatch(sendMessageAction());
        };
        const handleUpdateMessageText = (newText) => {
          store.dispatch(updateMessageAction(newText));
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialoguesContainer;

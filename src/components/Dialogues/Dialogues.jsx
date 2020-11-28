import React from 'react';
import DialoguesList from '../atoms/DialoguesList/DialoguesList';
import Title from '../atoms/Title/Title';
import CompanionAvatar from './CompanionAvatar/CompanionAvatar';
import s from './Dialogues.module.css';
import MessageInput from './MessageInput/MessageInput';
import MessagesList from './MessagesList/MessagesList';

const Dialogues = (props) => {
  const { messages, companions, currentMessage } = props;
  return (
    <div className={s.dialogues}>
      <div className={s.dialogues__title}>
        <Title text="All messages" />
      </div>
      <div className={s.dialogues__aside}>
        <DialoguesList companions={companions} />
      </div>
      <div className={s.dialogues__avatar}>
        <CompanionAvatar
          iconAltName="avatar"
          iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
          name="Jason Bourne"
          status="online"
        />
      </div>
      <div className={s.dialogues__messages}>
        <MessagesList messages={messages} />
      </div>
      <div className={s.dialogues__input}>
        <MessageInput
          currentMessage={currentMessage}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Dialogues;

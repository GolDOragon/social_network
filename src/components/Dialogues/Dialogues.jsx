import React from 'react';
import CompanionAvatar from './CompanionAvatar/CompanionAvatar';
import s from './Dialogues.module.css';
import DialoguesList from './DialoguesList/DialoguesList';
import MessagesList from './MessagesList/MessagesList';
import Title from './Title/Title';

const Dialogues = (props) => {
  const { messages, companions } = props;
  return (
    <div className={s.dialogues}>
      <Title text=" All messages" />
      <div className={s.dialogues__container}>
        <DialoguesList companions={companions} />
        <div className={s.dialogues__correspondence}>
          <CompanionAvatar
            iconAltName="avatar"
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
            name="Jason Bourne"
            status="online"
          />
          <MessagesList messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default Dialogues;

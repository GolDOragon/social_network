import React from 'react';
import DialoguesList from '../atoms/DialoguesList/DialoguesList';
import Title from '../atoms/Title/Title';
import CompanionAvatar from './CompanionAvatar/CompanionAvatar';
import s from './Dialogues.module.css';
import MessagesList from './MessagesList/MessagesList';

const Dialogues = (props) => {
  const { messages, companions } = props;
  return (
    <div className={s.dialogues}>
      <Title text="All messages" />
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

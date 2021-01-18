import React from 'react';
import DialoguesList from '../atoms/DialoguesList/DialoguesList';
import Title from '../atoms/Title/Title';
import CompanionAvatar from './CompanionAvatar/CompanionAvatar';
import css from './Dialogues.module.css';
import MessageInput from './MessageInput/MessageInput';
import MessagesList from './MessagesList/MessagesList';

const Dialogues = ({ companions, companionAvatar, messages, sendMessage }) => {
  return (
    <div className={css.dialogues}>
      <div className={css.dialogues__title}>
        <Title text="All messages" />
      </div>
      <div className={css.dialogues__aside}>
        <DialoguesList companions={companions} />
      </div>
      <div className={css.dialogues__avatar}>
        <CompanionAvatar {...companionAvatar} />
      </div>
      <div className={css.dialogues__messages}>
        <MessagesList messages={messages} />
      </div>
      <div className={css.dialogues__input}>
        <MessageInput onSubmit={sendMessage} />
      </div>
    </div>
  );
};

export default Dialogues;

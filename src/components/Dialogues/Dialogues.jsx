import React from 'react';
import DialoguesList from '../atoms/DialoguesList/DialoguesList';
import Title from '../atoms/Title/Title';
import CompanionAvatar from './CompanionAvatar/CompanionAvatar';
import s from './Dialogues.module.css';
import MessageInput from './MessageInput/MessageInput';
import MessagesList from './MessagesList/MessagesList';

const Dialogues = (props) => {
  const {
    title,
    companions,
    companionAvatar,
    messages,
    newMessageText,
    sendMessage,
    updateMessageText,
  } = props;
  return (
    <div className={s.dialogues}>
      <div className={s.dialogues__title}>
        <Title text={title} />
      </div>
      <div className={s.dialogues__aside}>
        <DialoguesList companions={companions} />
      </div>
      <div className={s.dialogues__avatar}>
        <CompanionAvatar {...companionAvatar} />
      </div>
      <div className={s.dialogues__messages}>
        <MessagesList messages={messages} />
      </div>
      <div className={s.dialogues__input}>
        <MessageInput
          newMessageText={newMessageText}
          sendMessage={sendMessage}
          updateMessageText={updateMessageText}
        />
      </div>
    </div>
  );
};

export default Dialogues;

import React from 'react';
import s from './DialoguesList.module.css';
import LinkToConversation from './LinkToConversation/LinkToConversation';

const DialoguesList = (props) => {
  return (
    <ul className={s.dialoguesList}>
      {props.companions.map((companion) => (
        <LinkToConversation {...companion} key={companion.id} />
      ))}
    </ul>
  );
};

export default DialoguesList;

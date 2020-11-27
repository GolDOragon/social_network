import React from 'react';
import s from './MessageInput.module.css';

const MessageInput = (props) => {
  return (
    <div className={s.messageInput}>
      <div className={s.messageInput__inputContainer}>
        <textarea className={s.messageInput__input} rows={5}></textarea>
      </div>
      <div className={s.messageInput__sendContainer}>
        <button className={s.messageInput__send}>Send</button>
      </div>
    </div>

  );
};

export default MessageInput;

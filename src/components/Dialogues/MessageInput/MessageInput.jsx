import React from 'react';
import s from './MessageInput.module.css';

const MessageInput = (props) => {
  const { newMessageText, sendMessage, updateMessageText } = props;

  const handleChange = (e) => {
    const text = e.target.value;
    updateMessageText(text);
  };
  const handleClick = () => {
    sendMessage();
  };

  return (
    <div className={s.messageInput}>
      <div className={s.messageInput__inputContainer}>
        <textarea
          className={s.messageInput__input}
          rows={5}
          value={newMessageText}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={s.messageInput__sendContainer}>
        <button className={s.messageInput__send} onClick={handleClick}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;

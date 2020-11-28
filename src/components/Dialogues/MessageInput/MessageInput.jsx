import React from 'react';
import { sendMessageAction, updateMessageAction } from '../../../redux/store';
import s from './MessageInput.module.css';

const MessageInput = (props) => {
  const { currentMessage } = props;

  const handleChange = (e) => {
    const text = e.target.value;
    props.dispatch(updateMessageAction(text));
  };
  const handleClick = () => {
    props.dispatch(sendMessageAction());
  };

  return (
    <div className={s.messageInput}>
      <div className={s.messageInput__inputContainer}>
        <textarea
          className={s.messageInput__input}
          rows={5}
          value={currentMessage}
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

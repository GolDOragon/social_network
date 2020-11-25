import React from 'react';
import s from './MessagesList.module.css';
import Message from './Message/Message';

const MessagesList = (props) => {
  return (
    <div className={s.messagesList}>
      {props.messages.map((message) => (
        <Message {...message} key={message.id} />
      ))}
    </div>
  );
};

export default MessagesList;

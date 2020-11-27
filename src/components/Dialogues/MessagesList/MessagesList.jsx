import React from 'react';
import Message from './Message/Message';
import s from './MessagesList.module.css';

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

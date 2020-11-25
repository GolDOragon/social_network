import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
  const { isMyMessage, iconSrc, iconAltName, status, text } = props;

  let messageCSS = s.message + ' ';
  messageCSS += isMyMessage ? s.message_me : s.message_you;

  let statusCSS = s.message__status + ' ';
  switch (status) {
    case 'online':
      statusCSS += s.message__status_online;
      break;
    case 'away':
      statusCSS += s.message__status_away;
      break;
    default:
  }

  let textCSS = s.message__text + ' ';
  textCSS += isMyMessage ? s.message__text_me : s.message__text_you;

  return (
    <div className={messageCSS}>
      <figure className={s.message__avatar}>
        <img className={s.message__icon} src={iconSrc} alt={iconAltName} />
        <span className={statusCSS}></span>
      </figure>
      <p className={textCSS}>{text}</p>
    </div>
  );
};

export default Message;

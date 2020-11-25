import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LinkToConversation.module.css';

const LinkToConversation = (props) => {
  const {
    isCompanionSelect,
    iconSrc,
    iconAltName,
    userStatus,
    userName,
    id = 1,
  } = props;

  const companionCSS = isCompanionSelect
    ? `${s.companion} ${s.companion_active}`
    : `${s.companion}`;

  let statusCSS = s.companion__status;
  switch (userStatus) {
    case 'online':
      statusCSS += ` ${s.companion__status_online}`;
      break;
    case 'away':
      statusCSS += ` ${s.companion__status_away}`;
      break;
    default:
    // case 'offline':
    //   statusCSS += ` ${s.user__status_}`;
  }

  return (
    <li>
      <NavLink to={`/dialogues/${id}`} className={companionCSS}>
        <figure className={s.companion__avatar}>
          <img className={s.companion__icon} src={iconSrc} alt={iconAltName} />
          <span className={statusCSS}></span>
        </figure>
        <p className={s.companion__name}>{userName}</p>
      </NavLink>
    </li>
  );
};

export default LinkToConversation;

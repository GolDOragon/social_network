import React from 'react';
import s from './Dialogs.module.css';

const UserAvatar = (props) => {
  const { isUserSelect, iconSrc, iconAltName, userStatus, userName } = props;

  const userAvatarCSS = isUserSelect
    ? `${s.companions__user} ${s.companions__user_active}`
    : `${s.companions__user}`;

  let statusCSS = s.user__status;
  switch (userStatus) {
    case 'online':
      statusCSS += ` ${s.user__status_online}`;
      break;
    case 'away':
      statusCSS += ` ${s.user__status_away}`;
      break;
    default:
    // case 'offline':
    //   statusCSS += ` ${s.user__status_}`;
  }

  return (
    <li className={userAvatarCSS}>
      <figure className={s.user__avatar}>
        <img className={s.user__icon} src={iconSrc} alt={iconAltName} />
        <span className={statusCSS}></span>
      </figure>
      <p className={s.user__name}>{userName}</p>
    </li>
  );
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__title}>
        <span className={s.title__icon}></span> All messages
      </div>
      <div className={s.dialogs__container}>
        <ul className={s.dialogs__companions}>
          <UserAvatar
            isUserSelect={true}
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar5.jpg"
            iconAltName="avatar1"
            userStatus="online"
            userName="Molly Cyrus"
          />
          <UserAvatar
            isUserSelect={false}
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar2.jpg"
            iconAltName="avatar2"
            userStatus="away"
            userName="Andrew"
          />
          <UserAvatar
            isUserSelect={false}
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar3.jpg"
            iconAltName="avatar3"
            userStatus="offline"
            userName="Jason Bourne"
          />
          <UserAvatar
            isUserSelect={false}
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg"
            iconAltName="avatar4"
            userStatus="online"
            userName="Srack"
          />
          <UserAvatar
            isUserSelect={false}
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar6.jpg"
            iconAltName="avatar6"
            userStatus="online"
            userName="ffoobar foobar foobar foobar foobar foobarfoobaroobar"
          />
          {Array(10)
            .fill(
              <UserAvatar
                isUserSelect={false}
                iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar6.jpg"
                iconAltName="avatar6"
                userStatus="online"
                userName="ffoobarfoobarfoobarfoobarfoobarfoobarfoobaroobar"
              />,
            )
            .map((item) => item)}
        </ul>
        <div className={s.dialogs__correspondence}>
          <div className={s.correspondence__companion}>
            <figure className={s.companion__avatar}>
              <img
                className={s.companion__icon}
                src="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
                alt="avatar"
              />
            </figure>
            <div className={s.companion__info}>
              <p className={s.companion__name}>Jason Bourne</p>
              <p className={s.companion__status}>Online</p>
            </div>
          </div>
          <div className={s.correspondence__messages}>
            <div>Hi</div>
            <div
              className={`${s.correspondence__message} ${s['correspondence__message']}`}
            >
              Hello, how are you?
            </div>
          </div>
          <div className={s.messages__message}>Hi</div>
          <div className={s.messages__message}>Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

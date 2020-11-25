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

const CompanionAvatar = (props) => {
  const { iconSrc, iconAltName, name, status } = props;

  return (
    <div className={s.correspondence__companion}>
      <figure className={s.companion__avatar}>
        <img className={s.companion__icon} src={iconSrc} alt={iconAltName} />
      </figure>
      <div className={s.companion__info}>
        <p className={s.companion__name}>{name}</p>
        <p className={s.companion__status}>{status}</p>
      </div>
    </div>
  );
};

const Message = (props) => {
  const { isMyMessage, iconSrc, iconAltName, status, text } = props;
  let messageCSS = s.messages__message + ' ';
  messageCSS += isMyMessage ? s.messages__message_me : s.messages__message_you;
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
        <img
          className={s.message__icon}
          src={iconSrc}
          alt={iconAltName}
          // src="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
          // alt="JasonBourne"
        />
        <span className={statusCSS}></span>
      </figure>
      <p className={textCSS}>{text}</p>
    </div>
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
          <CompanionAvatar
            iconAltName="avatar"
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
            name="Jason Bourne"
            status="online"
          />
          <div className={s.correspondence__messages}>
            <Message
              isMyMessage={false}
              iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
              iconAltName="JasonBourne"
              status="online"
              text={`Hi, I'm interested in your vacancy. I haven' t commercial experience but I have done a lot of projects using JS / TS, Webpack, Babel, React / Redux, or Vue / Vuex (There's one team project on Vue).`}
            />
            <Message
              isMyMessage={true}
              iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg"
              iconAltName="Good Boy"
              status="offline"
              text="I haven' t worked with some technologies of your stack, but I think I'll able to learn them in a short time."
            />
            <Message
              isMyMessage={false}
              iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
              iconAltName="JasonBourne"
              status="online"
              text=" I haven' t worked with some technologies of your stack, but I I haven't worked with some technologies of your stack, but I I haven' t worked with some technologies of your stack, but I I haven't worked with some technologies of your stack, but I I haven' t worked with some technologies of your stack, but I I haven't worked with some technologies of your stack, but I think I' ll able to learn them in a short time. think I'll able to learn them in a short time. think I' ll able to learn them in a short time. think I'll able to learn them in a short time. think I' ll able to learn them in a short time. think I'll able to learn them in a short time. "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

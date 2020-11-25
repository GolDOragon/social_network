import React from 'react';
import s from './Dialogues.module.css';
import Title from './Title/Title';
import DialoguesList from './DialoguesList/DialoguesList';
import CompanionAvatar from './CompanionAvatar/CompanionAvatar';
import MessagesList from './MessagesList/MessagesList';

const companions = [
  {
    id: 1,
    isUserSelect: true,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar5.jpg',
    iconAltName: 'avatar1',
    userStatus: 'online',
    userName: 'Molly Cyrus',
  },
  {
    id: 2,
    isUserSelect: false,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar2.jpg',
    iconAltName: 'avatar2',
    userStatus: 'away',
    userName: 'Andrew',
  },
  {
    id: 3,
    isUserSelect: false,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar3.jpg',
    iconAltName: 'avatar3',
    userStatus: 'offline',
    userName: 'Jason Bourne',
  },
  {
    id: 4,
    isUserSelect: false,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
    iconAltName: 'avatar4',
    userStatus: 'online',
    userName: 'Srack',
  },
  {
    id: 5,
    isUserSelect: false,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar6.jpg',
    iconAltName: 'avatar6',
    userStatus: 'online',
    userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
  },
];

const messages = [
  {
    id: 1,
    isMyMessage: false,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
    iconAltName: 'JasonBourne',
    status: 'online',
    text: `Hi, I'm interested in your vacancy. I haven' t commercial experience but I have done a lot of projects using JS / TS, Webpack, Babel, React / Redux, or Vue / Vuex (There's one team project on Vue).`,
  },
  {
    id: 2,
    isMyMessage: true,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
    iconAltName: 'Good Boy',
    status: 'offline',
    text:
      "I haven' t worked with some technologies of your stack, but I think I'll able to learn them in a short time.",
  },
  {
    id: 3,
    isMyMessage: false,
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
    iconAltName: 'JasonBourne',
    status: 'online',
    text:
      " I haven' t worked with some technologies of your stack, but I I haven't worked with some technologies of your stack, but I I haven' t worked with some technologies of your stack, but I I haven't worked with some technologies of your stack, but I I haven' t worked with some technologies of your stack, but I I haven't worked with some technologies of your stack, but I think I' ll able to learn them in a short time. think I'll able to learn them in a short time. think I' ll able to learn them in a short time. think I'll able to learn them in a short time. think I' ll able to learn them in a short time. think I'll able to learn them in a short time. ",
  },
];

const Dialogues = () => {
  return (
    <div className={s.dialogs}>
      <Title />
      <div className={s.dialogs__container}>
        <DialoguesList companions={companions} />
        <div className={s.dialogs__correspondence}>
          <CompanionAvatar
            iconAltName="avatar"
            iconSrc="http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg"
            name="Jason Bourne"
            status="online"
          />
          <MessagesList messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default Dialogues;

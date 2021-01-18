const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  companionAvatar: {
    iconAltName: 'avatar',
    iconSrc:
      'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
    name: 'Jason Bourne',
    status: 'online',
  },
  companions: [
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
      userName: 'Shrack',
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
    {
      id: 6,
      isUserSelect: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar6.jpg',
      iconAltName: 'avatar6',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
    },
    {
      id: 7,
      isUserSelect: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar7.jpg',
      iconAltName: 'avatar7',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
    },
    {
      id: 8,
      isUserSelect: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
      iconAltName: 'avatar8',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
    },
    {
      id: 9,
      isUserSelect: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar9.jpg',
      iconAltName: 'avatar9',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
    },
  ],
  messages: [
    {
      id: 0,
      isMyMessage: true,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
      iconAltName: 'Good Boy',
      status: 'offline',
      text: `He was asked whether he would agree to leave the White House if he lost the electoral college vote. "Certainly I will, certainly I will and you know that," he said. However, the president went on to say that "if they do [elect Joe Biden], they made a mistake", and suggested he may never accept defeat. "It's going to be a very hard thing to concede because we know there was massive fraud," he said, an allegation he has stood by without offering proof. It is not a requirement for Mr Trump to concede in order for Mr Biden to be sworn in as the 46th US president. `,
    },
    {
      id: 1,
      isMyMessage: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
      iconAltName: 'JasonBourne',
      status: 'online',
      text: `My job is a long distance from my home, almost 50 miles away. I have to wake up early every morning, as I’m always in a rush. There’s never enough time for a relaxed breakfast. At exactly 6:00 AM, I get into my car and start the long drive.`,
    },
    {
      id: 2,
      isMyMessage: true,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
      iconAltName: 'Good Boy',
      status: 'offline',
      text:
        'I usually like driving on the highway more than in the city. During the morning rush hour, though, it’s not very enjoyable. The heavy traffic is a little bit annoying. So I always listen to my favorite classical music CD’s in the car – Chopin, Mozart, and Bach. That cheers me up a lot..',
    },
    {
      id: 3,
      isMyMessage: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
      iconAltName: 'JasonBourne',
      status: 'online',
      text:
        'The drive to work takes about one hour. Going back home in the evening after work takes even longer, maybe around 70 minutes. Lately I’ve been thinking about trying to take the train to work instead of driving. That way, I could still listen to my music with headphones, and even read a novel at the same time.',
    },
    {
      id: 4,
      isMyMessage: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
      iconAltName: 'JasonBourne',
      status: 'online',
      text:
        'The drive to work takes about one hour. Going back home in the evening after work takes even longer, maybe around 70 minutes. Lately I’ve been thinking about trying to take the train to work instead of driving. That way, I could still listen to my music with headphones, and even read a novel at the same time.',
    },
    {
      id: 5,
      isMyMessage: false,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
      iconAltName: 'JasonBourne',
      status: 'online',
      text: `Answering reporters' questions for the first time since losing the 3 November vote, Mr Trump insisted, however, that "this race is far from over". He has refused to concede, citing unsubstantiated claims of voter fraud. Individual states are currently certifying their results, after Mr Biden was projected as the winner with an unassailable lead. The Democrat leads Mr Trump 306 votes to 232 under the electoral college system that is used to pick US presidents. The tally is far more than the 270 needed to win, and Mr Biden also leads the popular vote by more than six million.`,
    },
    {
      id: 6,
      isMyMessage: true,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
      iconAltName: 'Good Boy',
      status: 'offline',
      text: `The president and his supporters have lodged a number of legal challenges over the election, but most have been dismissed. Earlier this week, Mr Trump finally agreed to allow the formal transition to President-elect Biden's team to begin, following several weeks of uncertainty. The decision means Mr Biden is able to receive top security briefings and access key government officials and millions of dollars in funds as he prepares to take over.`,
    },
  ],
};

const dialoguesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const calcMessage = (state) => {
        const id = state.messages.length;
        return {
          id,
          isMyMessage: true,
          iconSrc:
            'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
          iconAltName: 'Good Boy',
          status: 'offline',
          text: action.message,
        };
      };

      const newMessage = calcMessage(state);

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };

    default:
      return state;
  }
};

export default dialoguesReducer;

export const dialoguesAC = {
  sendMessage: (message) => ({ type: SEND_MESSAGE, message }),
};

export const sendMessageAction = () => {
  console.warn('Obsolete method. Please use dialoguesAC.sendMessage');
  dialoguesAC.sendMessage();
};

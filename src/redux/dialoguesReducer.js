export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

const dialoguesReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const calcMessage = (state) => {
        const id = state.messages.length;
        const text = state.newMessageText;
        return {
          id,
          isMyMessage: true,
          iconSrc:
            'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
          iconAltName: 'Good Boy',
          status: 'offline',
          text,
        };
      };

      const newMessage = calcMessage(state);

      return {
        ...state,
        messages: state.messages.concat(newMessage),
        newMessageText: '',
      };

    case UPDATE_MESSAGE:
      return {
        ...state,
        newMessageText: action.payload,
      };
    default:
      return state;
  }
};

export const sendMessageAction = () => ({ type: SEND_MESSAGE });
export const updateMessageAction = (text) => ({
  type: UPDATE_MESSAGE,
  payload: text,
});

export default dialoguesReducer;

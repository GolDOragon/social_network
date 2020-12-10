export const UPDATE_SEARCHED_USER = 'UPDATE_SEARCHED_USER';
export const SET_USERS = 'SET_USERS';
export const SUBSCRIBE_TO_USER = 'SUBSCRIBE_TO_USER';
export const UNSUBSCRIBE_FROM_USER = 'UNSUBSCRIBE_FROM_USER';

const initialState = {
  pageTitle: 'Find your friends',
  searchedUser: '',
  userList: [
    {
      id: 1,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar5.jpg',
      iconAltName: 'avatar1',
      userStatus: 'online',
      userName: 'Molly Cyrus',
      followed: true,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 2,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar2.jpg',
      iconAltName: 'avatar2',
      userStatus: 'away',
      userName: 'Andrew',
      followed: false,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 3,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar3.jpg',
      iconAltName: 'avatar3',
      userStatus: 'offline',
      userName: 'Jason Bourne',
      followed: false,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 4,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar4.jpg',
      iconAltName: 'avatar4',
      userStatus: 'online',
      userName: 'Shrack',
      followed: false,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 5,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar6.jpg',
      iconAltName: 'avatar6',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
      followed: false,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 6,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar6.jpg',
      iconAltName: 'avatar6',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
      followed: false,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 7,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar7.jpg',
      iconAltName: 'avatar7',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
      followed: true,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 8,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar8.jpg',
      iconAltName: 'avatar8',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
      followed: true,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 9,
      iconSrc:
        'http://www.wpkixx.com/html/winku/images/resources/friend-avatar9.jpg',
      iconAltName: 'avatar9',
      userStatus: 'online',
      userName: 'ffoobar foobar foobar foobar foobar foobarfoobaroobar',
      followed: true,
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        userList: [...state.userList, ...action.payload],
      };
    case UPDATE_SEARCHED_USER:
      return {
        ...state,
        searchedUser: action.payload,
      };

    case SUBSCRIBE_TO_USER:
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id !== action.payload) return user;
          return {
            ...user,
            followed: true,
          };
        }),
      };

    case UNSUBSCRIBE_FROM_USER:
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id !== action.payload) return user;
          return {
            ...user,
            followed: false,
          };
        }),
      };

    default:
      return state;
  }
};

export default usersReducer;

export const setUsersAction = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const updateSearchedUserAction = (text) => ({
  type: UPDATE_SEARCHED_USER,
  payload: text,
});

export const subscribeToUserAction = (userId) => ({
  type: SUBSCRIBE_TO_USER,
  payload: userId,
});

export const unsubscribeFromUserAction = (userId) => ({
  type: UNSUBSCRIBE_FROM_USER,
  payload: userId,
});

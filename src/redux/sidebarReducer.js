export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

const initialState = {
  searchText: '',
  pageList: ['profile', 'dialogues', 'news', 'music', 'settings'],
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
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export const updateSearchTextAction = (text) => ({
  type: UPDATE_SEARCH_TEXT,
  payload: text,
});

export default sidebarReducer;

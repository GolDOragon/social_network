import React from 'react';
import DialoguesList from '../../atoms/DialoguesList/DialoguesList';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import Title from '../../atoms/Title/Title';
import s from './FriendSearch.module.css';

const FriendSearch = (props) => {
  const {
    friendSearchTitle,
    foundFriends,
    searchText,
    updateSearchText,
  } = props;

  const handleChangeText = (text) => {
    updateSearchText(text);
  };

  return (
    <div className={s.friendSearch}>
      <Title text={friendSearchTitle} />
      <SearchInput
        className={s.friendSearch_search}
        placeholder="Search Friend..."
        text={searchText}
        onChangeInput={handleChangeText}
        showSearchButton={false}
      />
      <div className={s.friendSearch__list}>
        <DialoguesList companions={foundFriends} />
      </div>
    </div>
  );
};

export default FriendSearch;

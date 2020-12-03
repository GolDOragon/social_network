import React from 'react';
import DialoguesList from '../../atoms/DialoguesList/DialoguesList';
import Title from '../../atoms/Title/Title';
import s from './FriendSearch.module.css';

const FriendSearch = (props) => {
  const {
    friendSearchTitle,
    foundFriends,
    searchText,
    updateSearchText,
  } = props;

  const handleChangeText = (e) => {
    const text = e.target.value;
    updateSearchText(text);
  };

  return (
    <div className={s.friendSearch}>
      <Title text={friendSearchTitle} />
      <input
        className={s.friendSearch_search}
        type="text"
        value={searchText}
        placeholder="Search Friend..."
        onChange={handleChangeText}
      />
      <div className={s.friendSearch__list}>
        <DialoguesList companions={foundFriends} />
      </div>
    </div>
  );
};

export default FriendSearch;

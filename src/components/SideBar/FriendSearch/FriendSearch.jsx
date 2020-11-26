import React from 'react';
import DialoguesList from '../../atoms/DialoguesList/DialoguesList';
import Title from '../../atoms/Title/Title';
import s from './FriendSearch.module.css';

const FriendSearch = (props) => {
  const { companions } = props;

  return (
    <div className={s.friendSearch}>
      <Title text="Friends" />
      <input
        className={s.friendSearch_search}
        type="text"
        placeholder="Search Friend..."
      />
      <div className={s.friendSearch__list}>
        <DialoguesList companions={companions} />
      </div>
    </div>
  );
};

export default FriendSearch;

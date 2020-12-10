import React from 'react';
import s from './SearchInput.module.css';

const SearchInput = (props) => {
  const {
    placeholder = 'Search...',
    text,
    buttonText = 'Find',
    onChangeInput,
    onClickSearch,
    showSearchButton = true,
  } = props;

  const handleChange = (e) => {
    onChangeInput(e.target.value);
  };

  const handleClickSearch = () => {
    onClickSearch();
  };

  return (
    <div className={s.searchInput__container}>
      <input
        type="text"
        className={s.searchInput__input}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
      {showSearchButton && (
        <button
          className={s.searchInput__searchBtn}
          onClick={handleClickSearch}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SearchInput;

import React from 'react';
import css from './PaginatorButton.module.css';

const PaginatorButton = ({ text, onSelectPage, disabled }) => {
  const handleSelectPage = () => {
    if (disabled) return;
    onSelectPage();
  };

  return (
    <button
      className={`${css.paginator__button} ${
        disabled && css.paginator__button_disabled
      }`}
      onClick={handleSelectPage}
    >
      {text}
    </button>
  );
};

export default PaginatorButton;

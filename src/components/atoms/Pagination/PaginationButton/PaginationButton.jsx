import React from 'react';
import s from './PaginationButton.module.css';

const PaginationButton = (props) => {
  const { isSelected, value } = props;

  const handleClick = () => {
    props.onClick(value);
  };
  return (
    <button
      type="button"
      className={s.paginationButton + (isSelected ? ` ${s.selected}` : '')}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
};
export default PaginationButton;

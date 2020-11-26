import React from 'react';
import s from './Title.module.css';

const Title = (props) => {
  return (
    <h3 className={s.title}>
      <span className={s.title__icon}>{props.text}</span>
    </h3>
  );
};

export default Title;

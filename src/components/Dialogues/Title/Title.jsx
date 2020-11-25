import React from 'react';
import s from './Title.module.css';

const Title = (props) => {
  return (
    <div className={s.title}>
      <span className={s.title__icon}> All messages</span>
    </div>
  );
};

export default Title;

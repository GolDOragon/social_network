import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../assets/img/default-user.jpg';
import s from './UserItem.module.css';

const UserItem = (props) => {
  const { iconSrc, name, followed, id, isDisabled } = props;

  return (
    <li className={s.user}>
      <div className={s.user__avatar}>
        <NavLink to={`/profile/${id}`}>
          <img src={iconSrc || img} alt={name} className={s.avatar__icon} />
        </NavLink>
        {followed && (
          <button
            disabled={isDisabled}
            className={s.avatar__subscribe}
            onClick={props.onUnsubscribe}
          >
            Unsubscribe
          </button>
        )}
        {!followed && (
          <button
            disabled={isDisabled}
            className={s.avatar__subscribe}
            onClick={props.onSubscribe}
          >
            Subscribe
          </button>
        )}
      </div>
      <div className={s.user__info}>
        <span className={s.info__fullname}>{name}</span>
        <span className={s.info__location}></span>
      </div>
    </li>
  );
};

export default UserItem;

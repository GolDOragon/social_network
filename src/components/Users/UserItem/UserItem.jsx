import Axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../assets/img/default-user.jpg';
import s from './UserItem.module.css';

const UserItem = (props) => {
  const { iconSrc, name, followed, id } = props;

  const handleSubscribe = (id) => {
    Axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
      null,
      {
        withCredentials: true,
        headers: {
          'API-KEY': '86798368-ca86-4eaa-8c39-db3db0a87b46',
        },
      },
    ).then((res) => {
      if (res.data.resultCode === 0) {
        props.onSubscribe(id);
      }
    });
  };
  const handleUnsubscribe = (id) => {
    Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      headers: {
        'API-KEY': '86798368-ca86-4eaa-8c39-db3db0a87b46',
      },
    }).then((res) => {
      if (res.data.resultCode === 0) {
        props.onUnsubscribe(id);
      }
    });
  };

  return (
    <li className={s.user}>
      <div className={s.user__avatar}>
        <NavLink to={`/profile/${id}`}>
          <img src={iconSrc || img} alt={name} className={s.avatar__icon} />
        </NavLink>
        {followed && (
          <button
            className={s.avatar__subscribe}
            onClick={() => handleUnsubscribe(id)}
          >
            Unsubscribe
          </button>
        )}
        {!followed && (
          <button
            className={s.avatar__subscribe}
            onClick={() => handleSubscribe(id)}
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

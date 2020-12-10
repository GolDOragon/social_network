import React from 'react';
import SearchInput from '../atoms/SearchInput/SearchInput';
import Title from '../atoms/Title/Title';
import s from './Users.module.css';

const Users = (props) => {
  const handleChangeSearchText = () => {};

  const handleSubscribe = (id) => {
    props.subscribe(id);
  };

  const handleUnsubscribe = (id) => {
    props.unsubscribe(id);
  };

  return (
    <div className={s.users}>
      <div className={s.users__title}>
        <Title text={props.title} />
      </div>
      <main className={s.users__main}>
        <div className={s.users__searchBox}>
          <SearchInput
            text={props.text}
            onChangeInput={handleChangeSearchText}
            showSearchButton={false}
          />
        </div>
        <ul className={s.users__userList}>
          {props.userList.map((user) => {
            return (
              <li className="userList__user" key={user.id}>
                <div className="user__avatar">
                  <img
                    src={user.iconSrc}
                    alt={user.name}
                    className="user__icon"
                  />
                  {user.followed && (
                    <button
                      className="user__unsubscribe"
                      onClick={() => handleUnsubscribe(user.id)}
                    >
                      Unsubscribe
                    </button>
                  )}
                  {!user.followed && (
                    <button
                      className="user__subscribe"
                      onClick={() => handleSubscribe(user.id)}
                    >
                      Subscribe
                    </button>
                  )}
                </div>
                <div className="user__info">
                  <span className="info__fullname">{user.name}</span>
                  <span className="info__status">
                    {user.userStatus ? 'Online' : 'Offline'}
                  </span>
                  <span className="info__location">
                    {user.location.city}, {user.location.country}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Users;

import React from 'react';
import Pagination from '../atoms/Pagination/Pagination';
import SearchInput from '../atoms/SearchInput/SearchInput';
import Title from '../atoms/Title/Title';
import UserItem from './UserItem/UserItem';
import s from './Users.module.css';

const Users = (props) => {

  return (
    <div className={s.users}>
      <div className={s.users__title}>
        <Title text={props.title} />
      </div>
      <div className={s.users__pagination}>
        <Pagination
          itemsTotalCount={props.usersTotalCount}
          itemsPerPage={props.pageSize}
          currentPage={props.currentPage}
          onChangePage={props.onChangePage}
        />
      </div>
      <main className={s.users__main}>
        <div className={s.users__searchBox}>
          <SearchInput
            text={props.text}
            onChangeInput={props.onChangeText}
            showSearchButton={false}
          />
        </div>
        <ul className={s.users__userList}>
          {props.userList.map((user) => {
            return (
              <UserItem
                key={user.id}
                {...user}
                isDisabled={props.subscriptions.some((id) => user.id === id)}
                onSubscribe={() => props.onSubscribe(user.id)}
                onUnsubscribe={() => props.onUnsubscribe(user.id)}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Users;

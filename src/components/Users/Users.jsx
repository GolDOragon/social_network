import React from 'react';
import SearchInput from '../atoms/SearchInput/SearchInput';
import Title from '../atoms/Title/Title';
import Paginator from '../common/molecules/Paginator/Paginator';
import UserItem from './UserItem/UserItem';
import s from './Users.module.css';

const Users = (props) => {
  return (
    <div className={s.users}>
      <div className={s.users__title}>
        <Title text={props.title} />
      </div>
      <div className={s.users__paginator}>
        <Paginator
          totalItemsCount={props.usersTotalCount}
          currentPage={props.currentPage}
          itemsPerPage={props.pageSize}
          onPageChanged={props.onChangePage}
          sliceSize={10}
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

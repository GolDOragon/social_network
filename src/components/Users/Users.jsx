import React from 'react';
import Pagination from '../atoms/Pagination/Pagination';
import SearchInput from '../atoms/SearchInput/SearchInput';
import Title from '../atoms/Title/Title';
import UserItem from './UserItem/UserItem';
import s from './Users.module.css';

const Users = (props) => {
  const pageCount = Math.ceil(props.usersTotalCount / props.pageSize);

  const handleChangePage = (pageNumber) => {
    props.onChangePage(pageNumber);
  };
  const handleSubscribe = (id) => {
    props.onSubscribe(id);
  };
  const handleUnsubscribe = (id) => {
    props.onUnsubscribe(id);
  };
  const handleChangeText = (text) => {
    props.onChangeText(text);
  };

  return (
    <div className={s.users}>
      <div className={s.users__title}>
        <Title text={props.title} />
      </div>
      <div className={s.users__pagination}>
        <Pagination
          currentPage={props.currentPage}
          pageTotalCount={pageCount}
          onChangePage={handleChangePage}
        />
      </div>
      <main className={s.users__main}>
        <div className={s.users__searchBox}>
          <SearchInput
            text={props.text}
            onChangeInput={handleChangeText}
            showSearchButton={false}
          />
        </div>
        <ul className={s.users__userList}>
          {props.userList.map((user) => {
            return (
              <UserItem
                key={user.id}
                {...user}
                onSubscribe={handleSubscribe}
                onUnsubscribe={handleUnsubscribe}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Users;

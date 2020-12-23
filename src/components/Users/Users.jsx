import Axios from 'axios';
import React from 'react';
import Pagination from '../atoms/Pagination/Pagination';
import SearchInput from '../atoms/SearchInput/SearchInput';
import Title from '../atoms/Title/Title';
import UserItem from './UserItem/UserItem';
import s from './Users.module.css';

class Users extends React.Component {
  componentDidMount() {
    if (this.props.userList.length !== 0) return;

    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    ).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  }

  handleChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
    ).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  };

  handleSubscribe = (id) => {
    this.props.subscribe(id);
  };

  handleUnsubscribe = (id) => {
    this.props.unsubscribe(id);
  };

  render = () => {
    const pageCount = Math.ceil(
      this.props.usersTotalCount / this.props.pageSize,
    );

    return (
      <div className={s.users}>
        <div className={s.users__title}>
          <Title text={this.props.title} />
        </div>
        <div className={s.users__pagination}>
          <Pagination
            currentPage={this.props.currentPage}
            pageTotalCount={pageCount}
            onChangePage={this.handleChangePage}
          />
        </div>
        <main className={s.users__main}>
          <div className={s.users__searchBox}>
            <SearchInput
              text={this.props.text}
              onChangeInput={this.handleChangeSearchText}
              showSearchButton={false}
            />
          </div>
          <ul className={s.users__userList}>
            {this.props.userList.map((user) => {
              return (
                <UserItem
                  key={user.id}
                  {...user}
                  onSubscribe={this.handleSubscribe}
                  onUnsubscribe={this.handleUnsubscribe}
                />
              );
            })}
          </ul>
        </main>
      </div>
    );
  };
}

export default Users;

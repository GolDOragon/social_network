import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        alt={'post img'}
      />
      {props.message}
      <div>
        <span>{props.likeCount}</span>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;

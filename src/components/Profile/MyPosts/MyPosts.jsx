import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { posts } = props;

  return (
    <div className={s.myPosts}>
      My posts
      <div>
        New post
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

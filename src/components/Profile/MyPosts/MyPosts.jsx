import React from 'react';
import MessageInput from '../../Dialogues/MessageInput/MessageInput';
import s from './MyPosts.module.css';
import Post from './Post';

const MyPosts = ({ posts, setPost }) => {
  const handleSetPost = (post) => {
    setPost(post);
  };

  return (
    <div className={s.myPosts}>
      <h2>My posts</h2>
      <MessageInput sendMessage={handleSetPost} />
      <div className={s.posts}>
        {posts.map((post, idx) => (
          <Post {...post} key={`${post.id}${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

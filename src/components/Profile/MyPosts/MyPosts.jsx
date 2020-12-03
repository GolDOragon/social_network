import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { posts, textareaValue } = props;

  const handleAddPost = () => {
    props.addPost();
  };

  const handleChangeText = (e) => {
    let text = e.target.value;
    props.updatePostText(text);
  };

  return (
    <div className={s.myPosts}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            style={{ backgroundColor: 'lightblue' }}
            value={textareaValue}
            onChange={handleChangeText}
          />
        </div>
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div className={s.posts}>
        {posts.map((post, idx) => (
          <Post {...post} key={`${post.id}${idx}`} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

import React from 'react';
import { addPostAction, updatePostTextAction } from '../../../redux/store';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { posts, textareaValue } = props;

  const textarea = React.createRef();

  const handleAddPost = () => {
    props.dispatch(addPostAction());
  };

  const handleChangeText = () => {
    let text = textarea.current.value;

    props.dispatch(updatePostTextAction(text));
  };

  return (
    <div className={s.myPosts}>
      <h2>My posts</h2>
      <div>
        <div>
          <textarea
            style={{ backgroundColor: 'lightblue' }}
            ref={textarea}
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

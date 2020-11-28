import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { posts, textareaValue } = props;

  const textarea = React.createRef();

  const handleAddPost = () => {
    // let text = textarea.current.value;
    props.addPost(/* text */);
  };

  const handleChangeText = () => {
    let text = textarea.current.value;
    console.log(text);
    props.updatePostText(text);
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
        {posts.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

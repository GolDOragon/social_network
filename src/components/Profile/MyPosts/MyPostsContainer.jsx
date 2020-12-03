import React from 'react';
import {
  addPostAction,
  updatePostTextAction
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const { posts, textareaValue } = props.store.getState().profilePage;

  const handleAddPost = () => {
    props.store.dispatch(addPostAction());
  };

  const handleChangePostText = (text) => {
    props.store.dispatch(updatePostTextAction(text));
  };

  return (
    <MyPosts
      posts={posts}
      textareaValue={textareaValue}
      addPost={handleAddPost}
      updatePostText={handleChangePostText}
    />
  );
};

export default MyPostsContainer;

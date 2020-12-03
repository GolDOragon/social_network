import React from 'react';
import {
  addPostAction,
  updatePostTextAction
} from '../../../redux/profileReducer';
import StoreContext from '../../../redux/StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const { posts, textareaValue } = store.getState().profilePage;

        const handleAddPost = () => {
          store.dispatch(addPostAction());
        };

        const handleChangePostText = (text) => {
          store.dispatch(updatePostTextAction(text));
        };
        return (
          <MyPosts
            posts={posts}
            textareaValue={textareaValue}
            addPost={handleAddPost}
            updatePostText={handleChangePostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

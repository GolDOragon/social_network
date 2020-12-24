import { connect } from 'react-redux';
import {
  addPostAction,
  updatePostTextAction
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  const { posts, textareaValue } = state.profilePage;
  return {
    posts,
    textareaValue,
  };
};

const mapDispatchToProps = {
  addPost: addPostAction,
  updatePostText: updatePostTextAction,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

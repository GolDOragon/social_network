import { connect } from 'react-redux';
import { profileAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  const { posts, textareaValue } = state.profilePage;
  return {
    posts,
    textareaValue,
  };
};

const mapDispatchToProps = {
  addPost: profileAC.addPost,
  updatePostText: profileAC.updatePostText,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

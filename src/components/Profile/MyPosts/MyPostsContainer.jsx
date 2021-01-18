import { connect } from 'react-redux';
import { setPostThunk } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  const { posts } = state.profilePage;
  return {
    posts,
  };
};

const mapDispatchToProps = {
  setPost: setPostThunk,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

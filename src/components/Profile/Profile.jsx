import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { posts } = props;

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPost={props.addPost}
        updatePostText={props.updatePostText}
        textareaValue={props.textareaValue}
      />
    </div>
  );
};

export default Profile;

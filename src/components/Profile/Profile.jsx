import React from 'react';
import Preloader from '../atoms/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <ProfileInfo {...props.profile} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;

import React from 'react';
import Preloader from '../atoms/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.content}>
      {props.profile && <ProfileInfo {...props.profile} />}
      {!props.profile && <Preloader />}
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;

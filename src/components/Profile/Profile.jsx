import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  const posts = [
    {
      id: 1,
      message: 'Hi',
      likeCount: 22,
    },
    {
      id: 2,
      message: 'How are you?',
      likeCount: 10,
    },
    {
      id: 3,
      message: "I'm fine, thanks",
      likeCount: 13,
    },
  ];

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;

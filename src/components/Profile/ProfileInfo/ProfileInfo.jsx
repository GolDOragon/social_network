import React from 'react';
import ProfileStatusHooks from '../ProfileStatus/ProfileStatusHooks';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({
  photos,
  fullName,
  followed,
  status,
  updateUserStatus,
  lookingForAJob,
  contacts,
  ...props
}) => {
  return (
    <div className={s.profileInfo}>
      <header className="profileInfo__header">
        <img className="header__avatar" src={photos.small} alt={fullName} />
        <button>{followed ? 'Unfollow' : 'Follow'}</button>
        <ProfileStatusHooks
          status={status}
          updateUserStatus={updateUserStatus}
        />
      </header>
      <main className="profileInfo__main">
        {fullName}
        {lookingForAJob ? <p>jobless</p> : null}
        {Object.entries(contacts).map(([sn, id], ind) => (
          <p key={id + ind}>
            {sn}: {id}
          </p>
        ))}
      </main>
    </div>
  );
};

export default ProfileInfo;

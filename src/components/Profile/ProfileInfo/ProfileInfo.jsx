import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <header className="profileInfo__header">
        <img
          className="header__banner"
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
        />
        <img
          className="header__avatar"
          src={props.photos.small}
          alt={props.fullName}
        />
        <button>{props.followed ? 'Unfollow' : 'Follow'}</button>
      </header>
      <main className="profileInfo__main">
        {props.fullName}
        {props.lookingForAJob ? <p>jobless</p> : null}
        {Object.entries(props.contacts).map(([sn, id], ind) => (
          <p key={id + ind}>
            {sn}: {id}
          </p>
        ))}
      </main>
    </div>
  );
};

export default ProfileInfo;

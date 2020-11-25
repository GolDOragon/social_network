import React from 'react';
import s from './CompanionAvatar.module.css';

const CompanionAvatar = (props) => {
  const { iconSrc, iconAltName, name, status } = props;

  return (
    <div className={s.companion}>
      <figure className={s.companion__avatar}>
        <img className={s.companion__icon} src={iconSrc} alt={iconAltName} />
      </figure>
      <div className={s.companion__info}>
        <p className={s.companion__name}>{name}</p>
        <p className={s.companion__status}>{status}</p>
      </div>
    </div>
  );
};

export default CompanionAvatar;

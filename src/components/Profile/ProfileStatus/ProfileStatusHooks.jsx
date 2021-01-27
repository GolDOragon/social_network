import React, { useEffect, useState } from 'react';
import css from './ProfileStatus.module.css';

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const handleActivateEditMode = () => {
    setEditMode(true);
  };
  const handleDeactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={css.profileStatus}>
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={handleDeactivateEditMode}
            onDoubleClick={handleDeactivateEditMode}
            onChange={handleChangeStatus}
            type="text"
            value={status}
          />
        </div>
      )}
      {!editMode && (
        <div>
          <span onDoubleClick={handleActivateEditMode}>
            {props.status || 'NO STATUS'}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusHooks;

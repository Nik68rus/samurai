import React from 'react';
import s from './profile-info.module.scss';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://www.silver.ru/upload/medialibrary/2aa/2aa6f1514eec57ebbdaaa44859349e50.jpg' alt='wallpapers' />
      </div>
      <div className={s['profile__info-wrapper']}>
        Ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
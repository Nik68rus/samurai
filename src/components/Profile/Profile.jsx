import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div>
    <div>
      <img src='https://www.silver.ru/upload/medialibrary/2aa/2aa6f1514eec57ebbdaaa44859349e50.jpg' alt='wallpapers' />
    </div>
    <div>
      Ava + description
    </div>
    <MyPosts />
  </div>
}

export default Profile;
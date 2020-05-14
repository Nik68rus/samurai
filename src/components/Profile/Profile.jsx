import React from 'react';
import s from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/profile-info';

const Profile = () => {
  return <div>
    <ProfileInfo />
    <MyPosts />
  </div>
}

export default Profile;
import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return <div className='content'>
    <div>
      <img src='https://i.simpalsmedia.com/999.md/BoardImages/900x900/8754611489eabcb08c41ce3cf6c31ce6.jpg' alt='wallpapers' />
    </div>
    <div>
      Ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>Post1</div>
        <div className={s.item}>Post2</div>
      </div>
    </div>
  </div>
}

export default Profile;
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.pinimg.com/736x/06/29/db/0629dbc679b8a4333e763037cf0b2246.jpg' alt='ava' />
      <div className={s.post__content}>
        <p>{props.message}</p>
        <div className={s.post__actions}>
          <button>Like! {props.likes}</button>
        </div>
      </div>
    </div>
  )
}

export default Post;
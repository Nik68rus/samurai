import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi! How are you?' likes='10' />
        <Post message='Hello, world!' likes='8' />
        <Post message='I miss you so much!' likes='3' />
      </div>
    </div>
  )
}

export default MyPosts;
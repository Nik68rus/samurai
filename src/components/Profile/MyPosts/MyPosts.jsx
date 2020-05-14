import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: '1', message: 'Hi! How are you?', likesCount: '10' },
    { id: '2', message: 'Hello, world!', likesCount: '8' },
    { id: '3', message: 'I miss you so much!', likesCount: '3' }
  ];

  return (
    <div className={s.posts__wrapper}>
      <h3>My posts</h3>
      <div className={s.posts__form}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {posts.map((post) => <Post data-id={post.id} key={`post-${post.id}`} message={post.message} likes={post.likesCount} />)}
      </div>
    </div>
  )
}

export default MyPosts;
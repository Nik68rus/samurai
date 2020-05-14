import React from 'react';
import s from './Dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.dialogs__toggle}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.dialogs__dialog} data-id={props.id}>{props.message}</div>
  );
}

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Sasha' },
    { id: 2, name: 'Masha' },
    { id: 3, name: 'Olya' },
    { id: 4, name: 'Kolya' },
    { id: 5, name: 'Misha' }
  ];

  let messagesData = [
    { id: 1, message: 'Hi! Let\'s meet tomorrow!' },
    { id: 2, message: 'Where have you been???' },
    { id: 3, message: 'Hola amigo!' },
    { id: 4, message: 'Perfect weather' }
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__list}>
        {dialogsData.map((user) => <DialogItem name={user.name} id={user.id} key={`dialog-${user.id}`} />)}
      </div>
      <div className={s.dialogs__items}>
        {messagesData.map((message) => <Message id={message.id} message={message.message} key={`message-${message.id}`} />)}
      </div>
    </div>
  );
};

export default Dialogs;
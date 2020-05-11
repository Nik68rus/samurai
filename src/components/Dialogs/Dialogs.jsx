import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__list}>
        <div className={`${s.dialogs__toggle} ${s.active}`}>Sasha</div>
        <div className={s.dialogs__toggle}>Masha</div>
        <div className={s.dialogs__toggle}>Misha</div>
        <div className={s.dialogs__toggle}>Dima</div>
        <div className={s.dialogs__toggle}>Olya</div>
      </div>
      <div className={s.dialogs__items}>
        <div className={s.dialogs__dialog}>Hi! Let's meet tomorrow!</div>
        <div className={s.dialogs__dialog}>Where have you been???</div>
        <div className={s.dialogs__dialog}>Hola amigo!</div>
        <div className={s.dialogs__dialog}>Perfect weather</div>
        <div className={s.dialogs__dialog}>Cmon</div>
      </div>
    </div>
  );
};

export default Dialogs;
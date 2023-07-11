import React from 'react';
import './styles.css';
import Close from '../../close.png';
import Input from '../Input';
import Button from '../Button/Button';

const Popap = (buttonText, color, sizeBut, line) => (
  <div className="window">
    <div className="head">
      <p className="headingText">
        Изменение
        <br />
        пароля
      </p>
      <button type="button" className="close"><img src={Close} /></button>
    </div>

    <p className="loginText">
      логин
      <br />
      <span>amaxbox.ya</span>
    </p>

    <Input value="Текущий пароль" error="Неверный пароль" />
    <p className="forgot">
      Если вы забыли пароль,
      <a href="#"> восстановите его</a>
    </p>
    <hr color="#DDDFE1" size="1" />
    <Input value="Новый пароль" />
    <Input value="Повторите пароль" subText="Не используйте пробел и < > % & ;" />
    <p className="pastText">После смены пароля вам необходимо заново войти в аккаунт на всех используемых устройствах</p>
    <Button buttonText="продолжить" sizeBut="for-popap" />
  </div>
);

export default Popap;


import React, { useState } from "react";
import "./styles.css";
import Close from '../../close.png';
import Input from '../Input';
import Button from '../Button/Button';


const Popap = () => {
    const [isCurrentPassHide1, setCurrentPassHide1] = useState(true);
    const [isCurrentPassHide2, setCurrentPassHide2] = useState(true);
    const [isCurrentPassHide3, setCurrentPassHide3] = useState(true);
    const [isvalue1, setValue1] = useState('');
    const [isvalue2, setValue2] = useState('');
    const [isvalue3, setValue3] = useState('');

    return (
        <div className='window'>
            <div className='head'>
                <p className="headingText">Изменение <br />пароля</p>
                <button className="close"><img src={Close} /></button>
            </div>

    <p className="loginText">
      логин
      <br />
      <span>amaxbox.ya</span>
    </p>

            <Input
                underText='Текущий пароль'
                value={isvalue1}
                isHide={isCurrentPassHide1}
                afterIconAction={() => setCurrentPassHide1(!isCurrentPassHide1)}
                subText='123'
                onChange={() => setValue1}
            />
            <p className="forgot">Если вы забыли пароль,<a href="#"> восстановите его</a></p>
            <hr color="#DDDFE1" size='1' />

            <Input
                underText='Новый пароль'
                type='success'
                value={isvalue2}
                isHide={isCurrentPassHide2}
                afterIconAction={() => setCurrentPassHide2(!isCurrentPassHide2)}
                subtext='123'
            />
            <Input
                underText='Повторите пароль'
                type='error'
                value={isvalue3}
                subText='Не используйте пробел и < > % & ;'
                isHide={isCurrentPassHide3}
                afterIconAction={() => setCurrentPassHide3(!isCurrentPassHide3)}
            />
            <p className="pastText">После смены пароля вам необходимо заново войти в аккаунт на всех используемых устройствах</p>
            <Button buttonText='продолжить' sizeBut='for-popap' />
        </div>
    )
}


export default Popap;

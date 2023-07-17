import React, { useState } from "react";
import "./styles.css";
import Close from '../../Close.svg';
import Input from '../Input';
import Button from '../Button';

const Popup = () => {
    // const [ data, setData ] = {
    //     input1: {
    //         value: "",
    //         isHidePass: true,
    //         type: "",
    //         subText: "",
    //     }
    // };
    const [isCurrentPassHide1, setCurrentPassHide1] = useState(true);
    const [isCurrentPassHide2, setCurrentPassHide2] = useState(true);
    const [isCurrentPassHide3, setCurrentPassHide3] = useState(true);
    const [isvalue1, setValue1] = useState('');
    const [isvalue2, setValue2] = useState('');
    const [isvalue3, setValue3] = useState('');

    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");

    const [subText2, setSubText2] = useState("");
    const [subText1, setSubText1] = useState("");
    const [subText3, setSubText3] = useState("");

    const handleInput3 = (event) => {
        const value3 = event.target.value;
        if (value3 !== '') {
            setSubText3("Пароли не совпадают");
        }
        setValue3(value3);
    }
    const handleInput2 = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        if (value === '') {
            setType2('default');
            setSubText2("Не используйте пробел и < > % & ;");
        } else if (value.length < 8) {
            setType2('');
            setSubText2("Не менее 8 символов");
        } else {
            setType2('success');
            setSubText2("Надёжный пароль");
        }
        setValue2(value);
    }

    const handleInput1 = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        //  = "***";
        if (value === "123") {
            setType1("success");
            setSubText1("Правильный пароль");
        } else {
            setType1("error");
            setSubText1("Неверный пароль")
        }
        setValue1(value);
    }

    return (
        <div className='window'>
            <div className='head'>
                <p className="headingText">Изменение <br />пароля</p>
                <button className="close"><img src={Close} alt="close" /></button>
            </div>

            <p className="loginText">
                логин <br />
                <span>amaxbox.ya</span>
            </p>

            <Input
                underText='Текущий пароль'
                type={type1}
                value={isvalue1}
                isHide={isCurrentPassHide1}
                afterIconAction={() => setCurrentPassHide1(!isCurrentPassHide1)}
                subText={subText1}
                onChange={handleInput1}
            />
            <p className="forgot">Если вы забыли пароль,<a href="#"> восстановите его</a></p>
            <hr className='line' color="#DDDFE1" size='1' />

            <Input
                underText='Новый пароль'
                type=''
                value={isvalue2}
                isHide={isCurrentPassHide2}
                afterIconAction={() => setCurrentPassHide2(!isCurrentPassHide2)}
                subText=''
                onChange={handleInput2}
            />

            <Input
                underText='Повторите пароль'
                type={type2}
                value={isvalue3}
                isHide={isCurrentPassHide3}
                afterIconAction={() => setCurrentPassHide3(!isCurrentPassHide3)}
                subText={subText2}
                onChange={handleInput3}
            />
            <p className="pastText">После смены пароля вам необходимо заново войти в аккаунт на всех используемых устройствах</p>
            <Button buttonText='продолжить' sizeBut='normal-size' />
        </div>
    )
}


export default Popup;
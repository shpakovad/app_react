import React from "react";
import style from "./Login.module.css";
import {Redirect} from "react-router-dom";


function Login(props) {

    if (props.logged) {
        return <Redirect to={"/profile"}/>
    }

    let classForDataUser = props.error ? `${style.errorData}` : `${style.userData}`;

    const {username, onChangeLogin, password, onChangePassword, error} = props;

    return (
        <div className={style.wrapper}>
            <div className={style.wrapperBG}>
                <div className={style.form}>
                    <input className={classForDataUser} type="text" placeholder="Введите имя пользователя"
                           value={username} onChange={onChangeLogin}/>
                    <input className={classForDataUser} type="text" placeholder="Введите пароль" value={password}
                           onChange={onChangePassword}/>
                </div>
                <button onClick={() => {
                    props.enterAuthorizationData(username, password)
                }}><span> Save </span></button>
                {error ? <div className={style.errorAuth}>Имя пользователя или пароль введены не верно</div> : ""}
            </div>
        </div>
    );
}

export default (Login);

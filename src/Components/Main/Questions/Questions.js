import React from "react";
import style from "./Questions.module.css";
import checkbox from "../../assets/images/Questions/checkbox.svg";

function Questions() {
    return (
        <div className={style.wrapperQuestions}>
            <div className={style.request}>
                <span className={style.titleRequest}>Есть вопрос? Ответим через 36 секунд</span>
                <div className={style.textRequest}>Оставьте заявку, и наш специалист проконсультирует вас</div>
                <div className={style.line}/>
            </div>
            <div className={style.form}>
                <input className={style.nameForm} placeholder="Ваше имя"/>
                <input className={style.phoneForm} placeholder="Телефон"/>
                <button className={style.callBtn}><span>Заказать звонок </span></button>
                <img src={checkbox} className={style.checkbox} alt="checkbox"/> <label>Даю согласие на обработку
                данных</label>
                <div className={style.lineCheckbox}/>
            </div>
        </div>
    );
}

export default Questions;

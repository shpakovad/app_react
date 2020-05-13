import React from "react";
import style from "./Footer.module.css";
import FooterLinks from "./FooterLinks/FooterLinks";

function Footer() {
    return (
        <div className={style.wrapperFooter}>
            <div className={style.firstSection}><span className={style.eventBiz}>EventBiz</span><span
                className={style.pro}>Pro</span>
                <span className={style.seminars}>Организация семинаров</span>
            </div>
            <div className={style.secondSection}>Политика конфиденциальности</div>
            <div className={style.thirdSection}>Соглашение на обработку персональных данных</div>
            <div>
                <div className={style.benefits}>Преимущества</div>
                <div className={style.reviews}>Отзывы</div>
                <div className={style.consultation}>Консультация</div>
                <div className={style.cases}>Кейсы</div>
                <div className={style.contacts}>Контакты</div>
                <div className={style.lineFooter}/>
            </div>
            <FooterLinks/>
        </div>
    );
}

export default Footer;

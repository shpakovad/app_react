import React from "react";
import style from "./Benefits.module.css";
import experience from "../../assets/images/Main/benefits/experience.svg";
import questions from "../../assets/images/Main/benefits/questions.svg";
import events from "../../assets/images/Main/benefits/events.svg";
import sides from "../../assets/images/Main/benefits/sides.svg";

function Benefits() {
    return (
        <div className={style.wrapperBenefits}>
            <div className={style.titleBenefits}>4 Главных преимущества</div>
            <div className={style.descriptionBenefits}>Благодаря которым нам доверили уже 473 семнинаров и коучингов
            </div>
            <div className={style.lineBenefits}/>
            <section>
                <div className={style.experience}>
                    <img src={experience} alt="experience"/>
                    <span className={style.titles}>Многолетний опыт</span>
                    <span
                        className={style.experienceDescription}>Занимаемся профессиональной организацией с 2006 года</span>
                </div>
                <div className={style.questions}>
                    <img src={questions} alt="questions"/>
                    <span className={style.titles}>Снимаем  все оргвопросы</span>
                    <span className={style.questionsDescription}>Брендирование пространства, кейтеринг, входная зона, фото и видео, размещение гостей</span>
                </div>
                <div className={style.events}>
                    <img src={events} alt="events"/>
                    <span className={style.titlesEvents}>473 мероприятий</span>
                    <span className={style.eventsDescription}>Именно столько бизнес семинаров мы провели за 13 лет работы</span>
                </div>
                <div className={style.sides}>
                    <img src={sides} alt="sides"/>
                    <span className={style.titlesEvents}>Сильная IT-сторона</span>
                    <span className={style.sidesDescription}>Каждый шаг фиксируется в CRM, к которой у вас будет доступ, чтобы все контролировать</span>
                </div>

            </section>
        </div>
    );
}

export default Benefits;

import React from "react";
import style from "./Reviews.module.css";
import photo_1 from "../../assets/images/Reviews/photo_1.png";
import photo_2 from "../../assets/images/Reviews/photo_2.png";
import photo_3 from "../../assets/images/Reviews/photo_3.png";
import photo_4 from "../../assets/images/Reviews/photo_4.png";
import left_vector from "../../assets/images/Reviews/left_vector.svg";
import right_vector from "../../assets/images/Reviews/right_vector.svg";
import substrate from "../../assets/images/Reviews/substrate.svg"

function Reviews() {
    return (
        <div className={style.wrapper}>
            <div className={style.substrate}>
                <img src={substrate} alt="substrate"/>
                <div className={style.titleWrapper}>
                    <span className={style.title}>Почитайте отзывы о нас</span>
                    <span className={style.explanation}>Каково это было для наших клиентов</span>
                </div>
                <div className={style.lineReview}/>
                <div className={style.wrapperReview}>
                    <img src={left_vector} className={style.left_vector} alt="left_vector"/>
                    <div className={style.textReview}>Благодаря слаженной и конструктивной работе сотрудников
                        EventBizPro во время проведения мероприятия был создан прецедент абсолютно нового подхода к
                        проведению узконаправленных международных конференций.
                        Великолепная атмосфера, великолепные люди. Это лучшая площадка для встречи людей, которые с
                        энтузиазмом делают бизнес.....
                    </div>
                    <img src={photo_1} className={style.photo_1} alt="photo_1"/>
                    <img src={photo_2} className={style.photo_2} alt="photo_2"/>
                    <img src={photo_3} className={style.photo_3} alt="photo_3"/>
                    <img src={photo_4} className={style.photo_4} alt="photo_4"/>
                    <img src={right_vector} className={style.right_vector} alt="right_vector"/>
                    <div className={style.name}>Алексей Гаврилов</div>
                    <div className={style.relocation}>Nexans Russia</div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;

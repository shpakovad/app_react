import React from "react";
import style from "./Cases.module.css";
import earth_substrate from "../../assets/images/Cases/earth_substrate.svg";
import Gallery from "./Gallery/Gallery";

function Cases() {
    return (
        <div className={style.wrapperCases}>
            <img src={earth_substrate} alt="earth_substrate"/>
            <div className={style.titleCases}>
                <span className={style.titleCasesText}>Посмотрите выполненные кейсы</span>
                <span className={style.casesText}>Мероприятия, о которых слышали все</span>
            </div>
            <div className={style.lineCases}/>
            <Gallery/>
        </div>
    );
}

export default Cases;

import React from "react";
import style from "./Main.module.css";
import Description from "./Description/Description";
import Benefits from "./Benefits/Benefits";
import Cases from "./Cases/Cases";
import Reviews from "./Reviews/Reviews";
import Questions from "./Questions/Questions";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import rocket from "../assets/images/Main/rocket.svg";
import earth from "../assets/images/Main/earth.svg";

function Main() {
    return (<>
            <div className={style.wrapperMain}>
                <img className={style.earthImg} src={earth} alt="img_earth"/>
                <div className={style.wrapper}>
                </div>
                <Description/>
                <Benefits/>
                <img className={style.rocket} src={rocket} alt="rocket"/>
                <div className={style.lineMain}/>
            </div>
            <Reviews/>
            <Questions/>
            <Cases/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default Main;

import React from "react";
import gif from "./img/circles.svg"
import s from "./img/Preloader.module.css"
export const Preloader = ()=>{
    return(
        <div className={s.preloader}>
            <h2>Loading...</h2><br/>
            <img src={gif} alt=""/>
        </div>
    )
}
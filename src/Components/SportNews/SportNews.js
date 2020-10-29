import React from "react";
import {connect} from "react-redux";

import { setSportNewsThunkCreator} from "../../redux/news-reducer";
import TitlebarGridList from "../NewsGrid/NewsGrid";
import sportNewsAPIContainer from "./SportNewsAPIContainer";


export const SportNews =(props)=>{

    return(<div>
        <TitlebarGridList articles={props.sportArticles}/>
    </div>)
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.news.isFetching,
        sportArticles: state.news.sportArticles,

    };
};
export const SportNewsContainer =connect(mapStateToProps, {setSportNewsThunkCreator})(sportNewsAPIContainer);




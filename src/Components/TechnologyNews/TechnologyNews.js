import React from "react";
import {connect} from "react-redux";

import { setTechnologyNewsThunkCreator} from "../../redux/news-reducer";
import TitlebarGridList from "../NewsGrid/NewsGrid";
import technologyNewsAPIContainer from "./TechnologyNewsAPICointainer";


export const TechnologyNews =(props)=>{

    return(<div>
        <TitlebarGridList articles={props.technologyArticles}/>
    </div>)
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.news.isFetching,
        technologyArticles: state.news.technologyArticles,

    };
};
export const TechnologyNewsContainer =connect(mapStateToProps, {setTechnologyNewsThunkCreator})(technologyNewsAPIContainer);




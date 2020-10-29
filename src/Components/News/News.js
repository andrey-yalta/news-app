import React from "react";
import {connect} from "react-redux";
import NewsAPIContainer from "./NewsAPIContainer";
import {setNewsThunkCreator} from "../../redux/news-reducer";
import TitlebarGridList from "../NewsGrid/NewsGrid";

export const News =(props)=>{

    return(<div>
            <TitlebarGridList articles={props.articles}/>
            </div>)
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.news.isFetching,
        articles: state.news.articles,

    };
};
export const NewsContainer =connect(mapStateToProps, {setNewsThunkCreator})(NewsAPIContainer);
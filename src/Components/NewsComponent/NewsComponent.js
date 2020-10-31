// import React from "react";
import {connect} from "react-redux";
import {setNewsThunkCreator, setSportNewsThunkCreator, setTechnologyNewsThunkCreator} from "../../redux/news-reducer";
import {getArticles, getIsFetching, getSportArticles, getTechnologyArticles} from "../../redux/news-selectors";
import {NewsAPIContainer} from "./NewsAPIComponent";

const NewsComponent = (getterArticles,thunkCreator )=>{
    let mapStateToProps = (state) => {
        return {
            isFetching: getIsFetching(state),
            articles: getterArticles(state),
        };
    };
    return  connect(mapStateToProps, {thunkCreator})(NewsAPIContainer)
}

export const NewsAppContainer = NewsComponent(getArticles,setNewsThunkCreator)
export const SportNewsAppContainer = NewsComponent(getSportArticles,setSportNewsThunkCreator)
export const TechnologyNewsAppContainer = NewsComponent(getTechnologyArticles,setTechnologyNewsThunkCreator)
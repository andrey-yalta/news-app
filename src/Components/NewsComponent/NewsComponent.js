// import React from "react";
import {connect} from "react-redux";
import {
    setHealthNewsThunkCreator,
    setNewsThunkCreator,
    setScienceNewsThunkCreator,
    setSportNewsThunkCreator,
    setTechnologyNewsThunkCreator
} from "../../redux/news-reducer";
import {
    getArticles, getHealthArticles,
    getIsFetching,
    getScienceArticles,
    getSportArticles,
    getTechnologyArticles
} from "../../redux/news-selectors";
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
export const ScienceNewsAppContainer = NewsComponent(getScienceArticles,setScienceNewsThunkCreator)
export const HealthNewsAppContainer = NewsComponent(getHealthArticles,setHealthNewsThunkCreator)
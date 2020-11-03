import {newsAPI} from "../api/api";
import {Language} from "@material-ui/icons";

let initialState ={
    articles: [],
    sportArticles:[],
    technologyArticles:[],
    scienceArticles:[],
    healthArticles:[],
    currentValue:"",
    isFetching:false,
    language:"ru",
}

let  newsReducer =(state = initialState,action)=>{
    switch (action.type) {
        case "SET-NEWS":{
            return { ...state, articles: [...action.articles]}}
        case "SET-LANGUAGE":{

            return { ...state, language: action.language}}
        case "SET-SPORT-NEWS":{

            return { ...state, sportArticles: [...action.articles]}}
        case "SET-TECHNOLOGY-NEWS":{

            return { ...state, technologyArticles: [...action.articles]}}
        case "SET-SCIENCE-NEWS":{
            return { ...state, scienceArticles: [...action.articles]}}
        case "SET-HEALTH-NEWS":{
            return { ...state, healthArticles: [...action.articles]}}
        case "TOGGLE-IS-FETCHING":{
            console.log(action.isFetchingValue)
            return  {...state, isFetching: action.isFetchingValue}
           }
        default:
            return state;
    }
}

export default newsReducer;
export const setLanguage =(language)=>({type:"SET-LANGUAGE", language:language});
export const setNews =(articles)=>({type:"SET-NEWS", articles:articles});
export const setSportNews =(articles)=>({type:"SET-SPORT-NEWS", articles:articles});
export const setTechnologyNews =(articles)=>({type:"SET-TECHNOLOGY-NEWS", articles:articles});
export const setScienceNews =(articles)=>({type:"SET-SCIENCE-NEWS", articles:articles});
export const setHealthNews =(articles)=>({type:"SET-HEALTH-NEWS", articles:articles});
export const toggleIsFetching =(isFetchingValue)=>({type:"TOGGLE-IS-FETCHING",isFetchingValue:isFetchingValue });

// надо сделать inicizlized приложения в начале и норм
export const setLanguageUi=(language)=> {

    return  (dispatch) => {
        dispatch(setLanguage(language));
        dispatch(setNewsThunkCreator(language));
        dispatch(setSportNewsThunkCreator(language));
        dispatch(setTechnologyNewsThunkCreator(language));
        dispatch(setScienceNewsThunkCreator(language));
        dispatch(setHealthNewsThunkCreator(language));
    }
}

export const setHealthNewsThunkCreator =(language) => setThunkCreator(language,"health",setHealthNews );
export const setScienceNewsThunkCreator =(language) => setThunkCreator(language,"science",setScienceNews );
export const setTechnologyNewsThunkCreator =(language) => setThunkCreator(language,"technology",setTechnologyNews );
export const setSportNewsThunkCreator =(language) => setThunkCreator(language,"sport",setSportNews );
export const setNewsThunkCreator =(language) => setThunkCreator(language,"general",setNews );

const setThunkCreator=(language,category,setNews)=> {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true));
        newsAPI.getNews(language, category)
            .then(data => {
                dispatch(setNews(data.articles));
                dispatch(toggleIsFetching(false));
            })
    }
}
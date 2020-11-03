import {newsAPI} from "../api/api";

let initialState ={
    articles: [],
    sportArticles:[],
    technologyArticles:[],
    scienceArticles:[],
    healthArticles:[],
    currentValue:"",
    isFetching:false,
}

let  newsReducer =(state = initialState,action)=>{
    switch (action.type) {
        case "SET-NEWS":{
            return { ...state, articles: [...action.articles]}}
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
export const setNews =(articles)=>({type:"SET-NEWS", articles:articles});
export const setSportNews =(articles)=>({type:"SET-SPORT-NEWS", articles:articles});
export const setTechnologyNews =(articles)=>({type:"SET-TECHNOLOGY-NEWS", articles:articles});
export const setScienceNews =(articles)=>({type:"SET-SCIENCE-NEWS", articles:articles});
export const setHealthNews =(articles)=>({type:"SET-HEALTH-NEWS", articles:articles});
export const toggleIsFetching =(isFetchingValue)=>({type:"TOGGLE-IS-FETCHING",isFetchingValue:isFetchingValue });

export const setNewsThunkCreator=()=> {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true));
        newsAPI.getNews()
            .then(data => {
                dispatch(setNews(data.articles));
                dispatch(toggleIsFetching(false));
            })
    }
}
export const setSportNewsThunkCreator=()=> {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true));
        newsAPI.getSportNews()
            .then(data => {
                dispatch(setSportNews(data.articles));
                dispatch(toggleIsFetching(false));
            })
    }
}

export const setTechnologyNewsThunkCreator=()=> {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true));
        newsAPI.getTechnologyNews()
            .then(data => {
                dispatch(setTechnologyNews(data.articles));
                dispatch(toggleIsFetching(false));
            })
    }
}

export const setScienceNewsThunkCreator=()=> {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true));
        newsAPI.getScienceNews()
            .then(data => {
                dispatch(setScienceNews(data.articles));
                dispatch(toggleIsFetching(false));
            })
    }
}

export const setHealthNewsThunkCreator=()=> {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true));
        newsAPI.getHealthNews()
            .then(data => {
                dispatch(setHealthNews(data.articles));
                dispatch(toggleIsFetching(false));
            })
    }
}
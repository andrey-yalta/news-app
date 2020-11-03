import TitlebarGridList from "./NewsGrid/NewsGrid";
import React from "react";
import CustomizedDialogs from "../Dialog/DIalog";

export  const NewsApp =(props)=>{
    return(<div>

            <TitlebarGridList articles={props.articles}/>

    </div>)
}
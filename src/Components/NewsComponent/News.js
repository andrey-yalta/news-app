import TitlebarGridList from "../NewsGrid/NewsGrid";
import React from "react";

export  const NewsApp =(props)=>{
    return(<div>
        <TitlebarGridList articles={props.articles}/>
    </div>)
}
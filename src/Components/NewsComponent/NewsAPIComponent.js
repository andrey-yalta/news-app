import React from "react";
import {NewsApp} from "./News";
import CustomizedDialogs from "../Dialog/DIalog";
import {Preloader} from "../../common/Preloader";

export  class NewsAPIContainer extends React.Component {
    componentDidMount() {
        this.refreshTechnologyNews();
    }
    refreshTechnologyNews(){
        if (this.props.articles.length === 0) {
            this.props.thunkCreator(this.props.language);
        }
    }
    render() {
        console.log("render news")
        if (this.props.isFetching) {
            console.log("fetching true")
            return ( <Preloader/>)
        } else {
            console.log("fetching false");
            return (
                <NewsApp articles={this.props.articles} />
                // <CustomizedDialogs articles={this.props.articles}/>
            )
        }
    }
}
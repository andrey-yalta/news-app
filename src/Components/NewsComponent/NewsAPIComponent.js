import React from "react";
import {NewsApp} from "./News";

export  class NewsAPIContainer extends React.Component {
    componentDidMount() {
        this.refreshTechnologyNews();
    }
    refreshTechnologyNews(){
        if (this.props.articles.length === 0) {
            this.props.thunkCreator();
        }
    }
    render() {
        console.log("render news")
        if (this.props.isFetching) {
            console.log("fetching true")
            return (<div>Loading... </div>)
        } else {
            console.log("fetching false");
            return (
                <NewsApp articles={this.props.articles} />
            )
        }
    }
}
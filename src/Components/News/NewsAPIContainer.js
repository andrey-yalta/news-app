import React from "react";
import {News} from "./News";

class NewsAPIContainer extends React.Component {
    componentDidMount() {
        // это уже санка

        this.refreshNews();
    }

    refreshNews(){

        if (this.props.articles.length === 0) {
            this.props.setNewsThunkCreator();
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
                <News articles={this.props.articles} />
            )
        }
    }
}

export default NewsAPIContainer;
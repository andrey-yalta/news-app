import React from "react";
import {TechnologyNews} from "./TechnologyNews";

class technologyNewsAPIContainer extends React.Component {
    componentDidMount() {
        // это уже санка

        this.refreshTechnologyNews();
    }

    refreshTechnologyNews(){

        if (this.props.technologyArticles.length === 0) {
            this.props.setTechnologyNewsThunkCreator();
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
                <TechnologyNews technologyArticles={this.props.technologyArticles} />
            )
        }
    }
}
export default technologyNewsAPIContainer;
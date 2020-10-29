import React from "react";
import {SportNews} from "./SportNews";

class sportNewsAPIContainer extends React.Component {
    componentDidMount() {
        // это уже санка

        this.refreshSportNews();
    }

    refreshSportNews(){

        if (this.props.sportArticles.length === 0) {
            this.props.setSportNewsThunkCreator();
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
                <SportNews sportArticles={this.props.sportArticles} />
            )
        }
    }
}
export default sportNewsAPIContainer;
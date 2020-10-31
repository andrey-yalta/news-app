import React, {Component} from "react";
import BackToTop from "./Components/Header/Header";
import {AppDrawer} from "./Components/drawer";
import { AppButtonsContainer} from "./Components/AppButtons";
import {Route} from "react-router-dom";
import CheckboxList from "./Components/AppList";
import {
    NewsAppContainer,
    SportNewsAppContainer,
    TechnologyNewsAppContainer
} from "./Components/NewsComponent/NewsComponent";




export default class App extends Component{

    constructor(props) {
        super(props);
        this.state ={
            isDrawerOpen: false
        }
    }

  render() {
    return(
        <div >
            <BackToTop onLeftIconClick={()=>{this.setState({isDrawerOpen:true})}}/>
            <AppDrawer open={this.state.isDrawerOpen} onToggle={(isDrawerOpen)=>{this.setState({isDrawerOpen})}}/>
            <AppButtonsContainer/>
            <Route path={"/news"} render={ ()=> <NewsAppContainer/> }/>
            <Route path={"/sport"} render={ ()=> <SportNewsAppContainer/> }/>
            <Route path={"/technology"} render={ ()=> <TechnologyNewsAppContainer/> }/>
            <CheckboxList/>


        </div>
    )
  }
}

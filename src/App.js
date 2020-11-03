import React, {Component} from "react";
import BackToTop from "./Components/Header/Header";
import {AppDrawer} from "./Components/Drawer/drawer";
import {Route} from "react-router-dom";

import {
    HealthNewsAppContainer,
    NewsAppContainer, ScienceNewsAppContainer,
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
            <Route path={"/news"} render={ ()=> <NewsAppContainer/> }/>
            <Route path={"/sport"} render={ ()=> <SportNewsAppContainer/> }/>
            <Route path={"/technology"} render={ ()=> <TechnologyNewsAppContainer/> }/>
            <Route path={"/science"} render={ ()=> <ScienceNewsAppContainer/> }/>
            <Route path={"/health"} render={ ()=> <HealthNewsAppContainer/> }/>

        </div>
    )
  }
}

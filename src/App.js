import React, {Component} from "react";

import BackToTop from "./Components/Header";
import {AppDrawer} from "./Components/drawer";
import { AppButtonsContainer} from "./Components/AppButtons";
import {NewsContainer} from "./Components/News/News";
import {Route} from "react-router-dom";
import {SportNewsContainer} from "./Components/SportNews/SportNews"
import {TechnologyNewsContainer} from "./Components/TechnologyNews/TechnologyNews";




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

            <Route path={"/news"} render={ ()=> <NewsContainer/> }/>
            <Route path={"/sport"} render={ ()=> <SportNewsContainer/> }/>
            <Route path={"/technology"} render={ ()=> <TechnologyNewsContainer/> }/>


        </div>
    )
  }
}

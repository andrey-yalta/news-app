import React, {Component} from "react";
import BackToTop from "./Components/Header/Header";
import {AppDrawer} from "./Components/Drawer/drawer";
import { AppButtonsContainer} from "./Components/AppButtons";
import {Route} from "react-router-dom";
import CheckboxList from "./Components/AppList";
import {
    HealthNewsAppContainer,
    NewsAppContainer, ScienceNewsAppContainer,
    SportNewsAppContainer,
    TechnologyNewsAppContainer
} from "./Components/NewsComponent/NewsComponent";
import {Preloader} from "./common/Preloader";


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
            {/*<AppButtonsContainer/>*/}
            {/*<Preloader/>*/}
            <Route path={"/news"} render={ ()=> <NewsAppContainer/> }/>
            <Route path={"/sport"} render={ ()=> <SportNewsAppContainer/> }/>
            <Route path={"/technology"} render={ ()=> <TechnologyNewsAppContainer/> }/>
            <Route path={"/science"} render={ ()=> <ScienceNewsAppContainer/> }/>
            <Route path={"/health"} render={ ()=> <HealthNewsAppContainer/> }/>
            {/*<CheckboxList/>*/}
            {/*<div><button onClick={()=>{console.log("click")}} onFocus={()=>{console.log("focus")}}*/}
            {/*onBlur={()=>{console.log("blure")}}>hello men</button></div>*/}
        </div>
    )
  }
}

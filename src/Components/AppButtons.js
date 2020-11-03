import React from "react";
import RaisedButton from "@material-ui/core/Button"
import {newsAPI} from "../api/api";
import {connect} from "react-redux";
import {setNewsThunkCreator} from "../redux/news-reducer";
import Button from '@material-ui/core/Button';
import s from "./AppButtons.module.css"
import DeleteIcon from '@material-ui/icons/Delete';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CustomizedDialogs from "./Dialog/DIalog";

const style={
    marginRight:20
}

export  const AppButtons = (props)=>{

    const getNews =()=>{

        newsAPI.getNews().then(data => console.log(data))
        props.setNewsThunkCreator();
    }
    return(<div>
            <RaisedButton label={"Primary"}  style={style}/>
            <button onClick={getNews}>get news</button><br/>

            <div className={s.buttons}>
                <Button variant="contained" color="primary">
                    Primary
                </Button>




                <Button
                    variant="contained"
                    color="secondary"
                    // className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    href={"https://www.google.ru"}
                    endIcon={<FingerprintIcon>send</FingerprintIcon>}
                >
                    Search in Google
                </Button>
            </div>



    </div>)
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.news.isFetching,

    };
};
export const AppButtonsContainer =connect(mapStateToProps, {setNewsThunkCreator})(AppButtons);
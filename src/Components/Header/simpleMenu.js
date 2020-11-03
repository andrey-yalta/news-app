import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from "@material-ui/icons/MoreVert";
import {connect} from "react-redux";
import {NewsAPIContainer} from "../NewsComponent/NewsAPIComponent";
import {setLanguage, setLanguageUi} from "../../redux/news-reducer";
import {getIsFetching} from "../../redux/news-selectors";



export default function SimpleMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {

        setAnchorEl(null);
    };
    const english =()=>{
        // props.setLanguage("us");
        props.setLanguageUi("us");
        handleClose();
    }
    const russian =()=>{
        props.setLanguageUi("ru");
        // props.setLanguage("ru");
        handleClose();
    }

    return (
        <div>
            <MoreIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={russian}>Русский</MenuItem>
                <MenuItem onClick={english} >Английский</MenuItem>
                {/*<MenuItem onClick={handleClose}>Выйти</MenuItem>*/}
            </Menu>
        </div>
    );
}
let mapStateToProps = (state) => {
    return {
        language: state.news.language,

    };
}
export const SimpleMenuContainer = connect(mapStateToProps, {setLanguage,setLanguageUi})(SimpleMenu);
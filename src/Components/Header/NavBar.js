import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {purple} from '@material-ui/core/colors';
import SimpleMenu, {SimpleMenuContainer} from "./simpleMenu";
import {NavLink} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import {Drawer} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navLink:{
        marginRight:"10px",
        color:"#fff",
        textDecoration: "none",
    },

}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: purple}} >
                <Toolbar>
                    <IconButton edge="start" onClick={props.onLeftIconClick} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <NavLink  to="/news"  className={classes.navLink}>
                    <Typography variant="h6" style={{"flexGrow": "0.01"}} className={classes.title}>
                        Новости
                    </Typography>
                    </NavLink>

                    <NavLink  to="/sport" className={classes.navLink}>
                    <Typography variant="h6"  style={{"flexGrow": "0.01"}}className={classes.title}>
                        Спорт
                    </Typography>
                    </NavLink>

                    <NavLink  to="/science" className={classes.navLink}>
                        <Typography variant="h6"  style={{"flexGrow": "0.01"}}className={classes.title}>
                            Наука
                        </Typography>
                    </NavLink>

                    <NavLink  to="/health" className={classes.navLink}>
                        <Typography variant="h6"  style={{"flexGrow": "0.01"}}className={classes.title}>
                            Здоровье
                        </Typography>
                    </NavLink>

                    <NavLink  to="/technology" className={classes.navLink} style={{flexGrow: "1",}}>
                    <Typography variant="h6"  className={classes.title}>
                        Технологии
                    </Typography>
                    </NavLink>
                    <Button color="inherit">Login</Button>


                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        <SimpleMenuContainer />
                    </IconButton>


                </Toolbar>
            </AppBar>
        </div>
    );
}

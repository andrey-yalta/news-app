import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {purple} from '@material-ui/core/colors';
import SimpleMenu from "./simpleMenu";


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
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: purple }} >
                <Toolbar>
                    <IconButton edge="start" onClick={props.onLeftIconClick} className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{"flexGrow": "0.01"}} className={classes.title}>
                        Новости
                    </Typography>

                    <Typography variant="h6"  style={{"flexGrow": "0.01"}}className={classes.title}>
                        Музыка
                    </Typography>

                    <Typography variant="h6"  className={classes.title}>
                        Фильмы
                    </Typography>
                    <Button color="inherit">Login</Button>


                    <IconButton aria-label="display more actions" edge="end" color="inherit">
                        <SimpleMenu />
                    </IconButton>


                </Toolbar>
            </AppBar>
        </div>
    );
}

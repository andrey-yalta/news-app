import React from "react";
import {Drawer} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BuildIcon from '@material-ui/icons/Build';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import indigo from "@material-ui/core/colors/indigo";
import {purple} from "@material-ui/core/colors";
import blue from "@material-ui/core/colors/blue";
import {NavLink} from "react-router-dom";
export const AppDrawer =(props)=>{
    return(
        <div>
            <Drawer
            open={props.open}
            onClose={({open})=>{props.onToggle(open)}}>

                <NavLink  to="/news"> <MenuItem>
                    <ListItemIcon>
                        <BuildIcon style={{color:indigo[500]}}/>
                    </ListItemIcon>
                    <Typography variant="inherit" >
                        Новости</Typography>
                </MenuItem></NavLink>
                <NavLink  to="/sport"><MenuItem>
                    <ListItemIcon>
                        <BuildIcon style={{color:indigo[500]}}/>
                    </ListItemIcon>
                    <Typography variant="inherit" >
                         Спорт</Typography>
                </MenuItem></NavLink>
                <NavLink  to="/technology"><MenuItem>
                    <ListItemIcon>
                        <BuildIcon style={{color:indigo[500]}}/>
                    </ListItemIcon>
                    <Typography variant="inherit" >
                         Технологии</Typography>
                </MenuItem></NavLink>
                <MenuItem>
                    <ListItemIcon >
                        <ImportContactsIcon  style={{color:blue[500]}} />
                    </ListItemIcon>
                    <Typography variant="inherit">Контакты</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <AudiotrackIcon style={{color:purple[500]}}/>
                    </ListItemIcon>
                    <Typography variant="inherit">Музыка</Typography>
                </MenuItem>


            </Drawer>
        </div>
    )
}
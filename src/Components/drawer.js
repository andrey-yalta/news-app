import React from "react";
import {Drawer} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Icon from '@material-ui/core/Icon';
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BuildIcon from '@material-ui/icons/Build';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import indigo from "@material-ui/core/colors/indigo";
import {purple} from "@material-ui/core/colors";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import {NavLink} from "react-router-dom";
export const AppDrawer =(props)=>{
    return(
        <div>
            <Drawer
            open={props.open}
            onClose={({open})=>{props.onToggle(open)}}>

                <MenuItem>
                    <ListItemIcon>
                        <BuildIcon style={{color:indigo[500]}}/>
                    </ListItemIcon>
                    <Typography variant="inherit" >
                        <NavLink  to="/news"> Новости</NavLink></Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <BuildIcon style={{color:indigo[500]}}/>
                    </ListItemIcon>
                    <Typography variant="inherit" >
                        <NavLink  to="/sport"> Спорт</NavLink></Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <BuildIcon style={{color:indigo[500]}}/>
                    </ListItemIcon>
                    <Typography variant="inherit" >
                        <NavLink  to="/technology"> Технологии</NavLink></Typography>
                </MenuItem>
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
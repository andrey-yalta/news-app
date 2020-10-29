import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from "@material-ui/icons/MoreVert";

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <MoreIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            {/*<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>*/}
            {/*    Open Menu*/}
            {/*</Button>*/}
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Профиль</MenuItem>
                <MenuItem onClick={handleClose}>Настройки</MenuItem>
                <MenuItem onClick={handleClose}>Выйти</MenuItem>
            </Menu>
        </div>
    );
}

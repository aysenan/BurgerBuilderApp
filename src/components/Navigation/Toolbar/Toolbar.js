import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


function Toolbar(props) {
    if(props.showSideDrawer) {

    }
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle classes={classes} SideDrawerOpenHandler={props.SideDrawerOpenHandler} />
            <div>LOGO</div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Toolbar

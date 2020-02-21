import React from 'react'
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';
function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
          <NavigationItem link="./" >BurgerBuilder</NavigationItem>
          <NavigationItem link="./" active>Check Out</NavigationItem>
        </ul>
    )
}

export default NavigationItems;

import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

function SideDrawer(props) {
    let attachedClasses=[classes.SideDrawer, classes.Close];
    if(props.show) {
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
    return (
        <Aux>
        <Backdrop show={props.show} clicked={props.handler}></Backdrop>
         <div className={attachedClasses.join(' ')}>
         <nav>
         <NavigationItems/>
         </nav>   
        </div>
        </Aux>
       
    )
}

export default SideDrawer;

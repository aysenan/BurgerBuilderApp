import React from 'react'

function DrawerToggle(props) {
    return (
        <div className={props.classes.container} onClick={props.SideDrawerOpenHandler}>
            <div className={props.classes.bar1}></div>
            <div className={props.classes.bar2}></div>
            <div className={props.classes.bar3}></div>
            </div>
    )
}

export default DrawerToggle

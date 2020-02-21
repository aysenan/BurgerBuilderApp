import React from 'react';
import classes from './backdrop.css'

function Backdrop(props) {
    return (
       props.show ?  <div className={classes.Backdrop} onClick={props.modalClosed}></div> : null
    )
}

export default Backdrop

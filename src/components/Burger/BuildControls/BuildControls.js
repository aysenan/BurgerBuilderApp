import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'}
]

function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>Burger Price :<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
               return <BuildControl 
               key={ctrl.label} 
               label={ctrl.label} 
               added={()=> props.addIngredient(ctrl.type)}
               removed= {()=> props.removeIngredient(ctrl.type)}
               disabled= {props.disableInfo[ctrl.type]}
               />
            })}
            <button onClick={props.ordered} disabled= {!props.purchaseable} className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls

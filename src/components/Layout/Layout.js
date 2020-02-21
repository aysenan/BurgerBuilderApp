import React, {useState} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => {
    const [showSideDrawer,swtShowSideDrawer] = useState(false)

    const SideDrawerCloseHandler = () => {
        swtShowSideDrawer(false)
    }
    const SideDrawerOpenHandler = () => {
        swtShowSideDrawer(true)   
    }
 return (
    <Aux>
        <Toolbar show={showSideDrawer} SideDrawerOpenHandler={SideDrawerOpenHandler}/>
        <SideDrawer show={showSideDrawer} handler={SideDrawerCloseHandler}/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
 )
}

export default layout;
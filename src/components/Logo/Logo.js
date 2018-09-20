import React from 'react';

import burgerLogo from '../../assets/images/dog.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} onClick={props.clicked} alt="Build-A-Burger"/>
    </div>
);

export default logo;
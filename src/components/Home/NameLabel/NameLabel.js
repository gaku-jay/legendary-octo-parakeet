import React from 'react';
import classes from './NameLabel.module.css';


const NameLabel = (props) => {
    return (
        <React.Fragment>
            <h1 className={classes.NameLabel}>{props.children}</h1>
        </React.Fragment>
    );
}

export default NameLabel;
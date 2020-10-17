import React from 'react';
import classes from './Summary.module.css'

const Summary = (props) =>{
    return (
    <h3 className={classes.Summary}>{props.children}</h3>
    );
}

export default Summary;
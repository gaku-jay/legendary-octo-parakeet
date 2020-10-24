import React from 'react';
import classes from './DownloadButton.module.css';

const DownloadButton = (props) => {
    return (
    <button 
        className={classes.DownloadButton} 
        onClick={props.onClick}
    >
        {props.children}
    </button>
    );
}

export default DownloadButton;
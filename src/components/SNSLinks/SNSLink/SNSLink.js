import React from 'react';
import classes from './SNSLink.module.css';

const SNSLink = (props) => {

    let snsName;
    let snsUrl;
    let snsClassName;

    if (props.data) {
        console.log('social', props.data)
        snsName = props.data.name;
        snsUrl = props.data.url;
        snsClassName = props.data.className
    }

    return(
        <li className={classes.SNSLink}>
            <a href={snsUrl} className={snsClassName}></a>
        </li>
    );
    
}



export default SNSLink;
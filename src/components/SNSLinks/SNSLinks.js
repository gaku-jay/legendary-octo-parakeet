import React from 'react';
import SNSLink from './SNSLink/SNSLink';
import classes from './SNSLinks.module.css';


const SNSLinks = (props) => {

    let snsLinks;

    if (props.data) {
        snsLinks = props.data.social.map(el => (
        <SNSLink data={el} key={el}>{el}</SNSLink>
        ));
    }
    
    return(
        <div className={classes.SNSLinks}>
             <ul>{snsLinks}</ul>
        </div>
    );
};

export default SNSLinks;
import React from 'react';
import SNSLink from './SNSLink/SNSLink';
import classes from './SNSLinks.module.css';


const SNSLinks = () => {

    const SNS_LINKS = ['Github', 'LinkedIn', 'Instagram', 'Twitter'];

    let SNSLinks = SNS_LINKS.map(el => (
    <SNSLink key={el}>{el}</SNSLink>
    ));
    
    return(
        <div className={classes.SNSLinks}>
             <ul>{SNSLinks}</ul>
        </div>
    );
};

export default SNSLinks;
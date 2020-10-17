import React from 'react';
import classes from './SNSLink.module.css';

const SNSLink = (props) => {

    let SNSLink;

    switch (props.children) {
        case 'Twitter':
            SNSLink = <li className={classes.Twitter}>{props.children}</li>;
            break; 

        case 'Instagram':
            SNSLink = <li className={classes.Instagram}>{props.children}</li>;
            break; 

        case 'LinkedIn':
            SNSLink = <li className={classes.LinkedIn}>{props.children}</li>;
            break; 
        case 'Github':
            SNSLink = <li className={classes.Github}>{props.children}</li>;
            break; 
    }

    return(
        <React.Fragment>
            {SNSLink}
        </React.Fragment>
    );
    
}



export default SNSLink;
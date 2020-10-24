import React from 'react';
import classes from './Home.module.css';

import SNSLinks from '../SNSLinks/SNSLinks';
import NameLabel from './NameLabel/NameLabel';
import Summary from './Summary/Summary';

const Home = (props) => {

    let name;
    let description;

    if(props.data) {
        name = props.data.name;
        description = props.data.description;
    }

    return (
        <div className={classes.Home}>
            <div className={classes.Banner}>
                <NameLabel>I'm {name}.</NameLabel>
                <Summary>{description}</Summary>
                <hr className={classes.hr} />
                <SNSLinks />
            </div>
        </div>
    );
}

export default Home;
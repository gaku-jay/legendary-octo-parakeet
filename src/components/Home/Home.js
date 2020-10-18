import React from 'react';
import classes from './Home.module.css';

import SNSLinks from '../SNSLinks/SNSLinks';
import NameLabel from './NameLabel/NameLabel';
import Summary from './Summary/Summary';

const Home = () => {

    return (
        <div className={classes.Home}>
            <div className={classes.Banner}>
                <NameLabel>I'm Gaku JINYAMA.</NameLabel>
                <Summary>I'm a Japan based system engineer working at an internatinal IT company. 
                    My interests are in web development, UI/UX design.</Summary>
                <hr className={classes.hr} />
                <SNSLinks />
            </div>
        </div>
    );
}

export default Home;
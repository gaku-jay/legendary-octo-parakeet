import React from 'react';
import classes from './IntroductionPart.module.css';

import SNSLinks from '../SNSLinks/SNSLinks';
import NameLabel from './NameLabel/NameLabel';
import Summary from './Summary/Summary';

const IntroductionPart = () => {

    return (
        <div className={classes.IntroductionPart}>
            <NameLabel>I'm Gaku Jinyama</NameLabel>
            <Summary>I'm a Japan based system engineer working at an internatinal IT company. 
                My interests are in web development, UI/UX design.</Summary>
            <SNSLinks />
        </div>
    );
}

export default IntroductionPart;
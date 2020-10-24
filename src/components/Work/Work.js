import React from 'react';
import classes from './Work.module.css';

import WorkBuilder from '../../containers/WorkBuilder/WorkBuilder';

const Work = () => {

    return(
        <div className={classes.Work}>
            <h1>Work</h1>
            <WorkBuilder />
        </div>
    );
}

export default Work;
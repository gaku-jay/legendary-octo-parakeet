import React from 'react';
import classes from './Work.module.css';
import WorkCard from './WorkCard/WorkCard';
import Card from '../UI/Card/Card';


const Work = (props) => {

    let workCards;

    if (props.data) {
        workCards = props.data.projects.map((el, index) => (
            <Card key={'work-card' + index} data={el}/>
        ));
    }

    return(
        <div className={classes.Work}>
            <h1>Work</h1>
            <div className={classes.WorkContents}>
                {workCards}
            </div>
        </div>
    );
}

export default Work;
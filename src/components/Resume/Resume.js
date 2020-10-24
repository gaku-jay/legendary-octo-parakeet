import React from 'react';
import classes from './Resume.module.css';
import ResumePanel from './ResumePanel/ResumePanel';

const Resume = (props) => {

    let educationPanels;
    let workPanels;
    let skillMessage;
    
    if (props.data) {
        skillMessage = props.data.skillmessage;
        if (props.data.education) {
                educationPanels = props.data.education.map((el, index) => (
                    <ResumePanel key={'education' + index}mode='education' data={el} />
                ))
            }
        if (props.data.work) {
            workPanels = props.data.work.map((el, index) => (
                <ResumePanel key={'work' + index} mode='work' data={el} />
            ))
        }
    }

    return(
        <div className={classes.Resume}>
            <h1>Resume</h1>
            <h2>{skillMessage}</h2>
            <div className={classes.ResumeContects}>
                {educationPanels}
                {workPanels}
            </div>
        </div>
    );
}

export default Resume;
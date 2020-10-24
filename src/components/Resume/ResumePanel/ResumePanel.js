import React from 'react';
import classes from './ResumePanel.module.css';

const ResumePanel = (props) => {

    let html;
    let skillMessage;

    if (props.data) {
        let data = props.data;
        switch (props.mode){

            case 'education':
                html = 
                <div className={classes.Education}> 
                    <h2>{data.school}</h2>
                    <h3>{data.degree}</h3>
                    <h3>{data.description}</h3>
                </div>;
                break;

            case 'work':
                html = 
                <div className={classes.Work}>
                    <h2>{data.company}</h2>
                    <h3>{data.title}</h3>
                    <h3>{data.description}</h3>
                </div>;
                break;
        }
    }


    return(
        <div className={classes.ResumePanel}>
            {html}
        </div>
    );

}

export default ResumePanel;
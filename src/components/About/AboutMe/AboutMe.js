import React from 'react';
import classes from './AboutMe.module.css';

const AboutMe = (props) => {

    let bio;

    if(props.data) {
        bio = props.data.bio;
    }

    return(
        <div className={classes.AboutMe}>
            <h2>
                About Me
            </h2>
            <p>
                {bio}
            </p>
        </div>
    );
}

export default AboutMe;
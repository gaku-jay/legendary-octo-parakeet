import React from 'react';
import classes from './About.module.css';

import AboutMe from './AboutMe/AboutMe';
import ContactDetails from './ContactDetails/ContactDetails';

const About = (props) => {

    let img;

    if (props.data) {
        img = 'images/' + props.data.image;
    }

    return(
        <div className={classes.About}>
            <h1>About</h1>
            <div className={classes.ContentSection}>
                <div className={classes.ImgSection}>
                    <img src={img} />
                </div>
                <div className={classes.AboutDetail}>
                    <AboutMe data={props.data}/>
                    <ContactDetails data={props.data} />
                </div>
            </div>
        </div>
    );
}

export default About;
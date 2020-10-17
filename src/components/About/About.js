import React from 'react';
import classes from './About.module.css';

import ContactDetails from './ContactDetails/ContactDetails';

const About = () => {

    return(
        <div className={classes.About}>
            <h1>This is About</h1>
            <ContactDetails />
        </div>
    );
}

export default About;
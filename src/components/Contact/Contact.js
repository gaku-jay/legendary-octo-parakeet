import React from 'react';
import classes from './Contact.module.css';

import SendMessage from '../../containers/SendMessage/SendMessage';
import ContactInformation from './ContactInformation/ContactInformation';

const Contact = (props) => {
    return(
        <div>
            <h1>This is Contact</h1>
            <SendMessage />
            <ContactInformation />            
        </div>
    );
}

export default Contact;
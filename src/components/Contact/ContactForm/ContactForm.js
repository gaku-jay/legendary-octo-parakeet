import React from 'react';
import classes from './ContactForm.module.css';

import InputForm from '../../UI/InputForm/InputForm'

const ContactForm = (props) => {
    return(
        <div className={classes.ContactForm}>
            <h3>Contact me from this form</h3>
            <form id="contact-form" onSubmit={props.handleSubmit} method="POST">
                    <InputForm className={classes.InputForm} placeholder='Name' value={props.name} onChange={props.onNameChange} />
                    <InputForm className={classes.InputForm} placeholder='Email' value={props.email} onChange={props.onEmailChange} />
                     <InputForm className={classes.InputForm} placeholder='Subject' value={props.subject} onChange={props.onSubjecrChange} />
                    <InputForm className={classes.InputForm} placeholder='Message' value={props.message} onChange={props.onMessageChange} />
                <button type="submit">Submit</button>
            </form>          
        </div>
    );
}

export default ContactForm;
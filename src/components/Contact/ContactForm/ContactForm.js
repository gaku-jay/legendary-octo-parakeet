import React from 'react';
import classes from './ContactForm.module.css';

const ContactForm = (props) => {
    return(
        <div>
            <h2>This is Contact Form</h2>
            <form id="contact-form" onSubmit={props.handleSubmit} method="POST">
                <div>
                    <label>Name</label>
                    <input type="text" value={props.name} onChange={props.onNameChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={props.email} onChange={props.onEmailChange} />
                </div>
                <div>
                    <label>Subject</label>
                    <input type="text" value={props.subject} onChange={props.onSubjectChange} />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" value={props.message} onChange={props.onMessageChange} />
                </div>
                <button type="submit">Submit</button>
            </form>          
        </div>
    );
}

export default ContactForm;
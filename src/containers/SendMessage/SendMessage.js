import React from 'react';

import ContactForm from '../../components/Contact/ContactForm/ContactForm';

class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    render(){
        return(
            <div>
                <ContactForm />
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    onNameChange(event) {
        this.setState({name: event.target.value});
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value});
    }

    onMessageChange(event) {
        this.setState({message: event.target.value});
    }

}

export default SendMessage;
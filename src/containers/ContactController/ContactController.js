import React from 'react';


class ContactController extends React.Component {
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
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div>
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div>
                        <label>Subject</label>
                        <input type="text" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
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

export default ContactController;
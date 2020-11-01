import { render } from '@testing-library/react';
import React from 'react';
import classes from './InputForm.module.css';

class InputForm extends React.Component {

    constructor(props) {
        super(props)
        this.state= {
            isFocus: false
        }
    }
    
    render() {
        let placeholder = null;
        let style = [classes.InputForm];

        if(this.props.placeholder) {
            placeholder = <label className={this.state.isFocus? [classes.Focused, classes.Placeholder].join(' ').trim() : classes.Placeholder}>{this.props.placeholder}</label>;
        }

        if(this.props.className) {
            style.push(this.props.className); 
        }

        return (
            <div onFocus={this.focusPlaceholder.bind(this)} onBlur={this.unFocuedPlaceholder.bind(this)} onChange={this.props.onChange} className={style.join(' ').trim()}>
                {placeholder}
                <input type='text' value={this.props.value} />
            </div>
        );
    }

    focusPlaceholder() {
        this.setState({isFocus: true});
    }

    unFocuedPlaceholder() {
        this.setState({isFocus: false});
    }
 
}

export default InputForm;
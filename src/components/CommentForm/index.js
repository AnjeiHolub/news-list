import React, {Component} from 'react';
import './commentForm.css';

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                Name: <input type = "text" 
                             value = {this.state.username} 
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')}
                        />
                Text: <input type = "text" 
                             value = {this.state.text} 
                             onChange = {this.handleChange('text')}
                             className = {this.getClassName('text')}
                        />
                <input type = 'submit' value = 'submit'/>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault;
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = (type) => {
        return this.state[type].length && this.state[type].length < limits[type].min ? 'form-input__error' : ''
    }

    handleChange = (type) => (event) => {
        const {value} = event.target;
        if (value.length > limits[type].max) {
            return;
        }
        
        this.setState({
            [type]: value
        });
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

export default CommentForm;
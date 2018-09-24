import React, {Component} from 'react';
import './commentForm.css';
import {connect} from 'react-redux';
import {addComment} from '../../AC';

class CommentForm extends Component {

    state = {
        user: '',
        text: ''
    }

    render () {
        return (
            <form onSubmit = {this.handleSubmit}>
                Name: <input type = "text" 
                             value = {this.state.user} 
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')}
                        />
                Text: <input type = "text" 
                             value = {this.state.text} 
                             onChange = {this.handleChange('text')}
                             className = {this.getClassName('text')}
                        />
                <input onClick = {this.handleSubmit} type = 'button' value = 'Добавь комментарий'/>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault;
        const {user, text} = this.state;
        const {articleId} = this.props;

        this.props.addComment({
            user: user,
            text: text,
            articleId: articleId
        });

        this.setState({
            user: '',
            text: ''
        });
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

const decorator = connect(null, {addComment: addComment});

export default decorator(CommentForm);
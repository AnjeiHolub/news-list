import React, {Component} from 'react';

class UserForm extends Component {
    state = {
        username: ''
    }

    render () {
        return (
            <div>
                Name: <input type = "text" value = {this.state.username} onChange = {this.handleUserChange}/>
            </div>
        )
    }

    handleUserChange = (event) => {
        if (event.target.value.length > 10) {
            return false;
        }
        
        this.setState({
            username: event.target.value
        });
    }
}

export default UserForm;
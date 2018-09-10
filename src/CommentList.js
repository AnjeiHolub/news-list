import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render () {
        return (
            <ul>
                <button onClick = {this.toggleOpen}>{this.state.isOpen ? 'HideComments' : 'ShowComments'}</button>
                {this.getComments()}
            </ul>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getComments = () => {
        if (!this.state.isOpen) {
            return null;
        }

        const {comments} = this.props;
        if (!comments || !comments) return <p>No comments yet</p>;
        const commentElements = comments.map((comment) => {
            return <li key = {comment.id}><Comment comment = {comment}/></li>
        });

        return commentElements;
    }
}
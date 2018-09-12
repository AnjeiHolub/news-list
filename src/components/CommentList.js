import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render () {
        const {isOpen, toggleOpen} = this.props;

        return (
            <ul>
                <button onClick = {toggleOpen}>{isOpen ? 'HideComments' : 'ShowComments'}</button>
                {this.getComments()}
            </ul>
        )
    }

    getComments = () => {
        const {isOpen} = this.props;

        if (!isOpen) {
            return null;
        }

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;
        const commentElements = comments.map((comment) => {
            return <li key = {comment.id}><Comment comment = {comment}/></li>
        });

        return commentElements;
    }
}

export default toggleOpen(CommentList);
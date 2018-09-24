import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';

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

        const {article} = this.props;
        const {comments, id} = article
        if (!comments.length) return <p>No comments yet</p>;
        const commentElements = comments.map((id) => {
            return <li key = {id}><Comment id = {id}/></li>
        });

        return (
            <div>
                {commentElements}
                <CommentForm articleId = {id}/>
            </div>
        );
    }
}

export default toggleOpen(CommentList);
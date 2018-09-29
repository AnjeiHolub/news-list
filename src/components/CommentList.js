import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';
import Loader from './Loader';
import {connect} from 'react-redux';
import {loadCommentsArticle} from '../AC';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    componentWillReceiveProps({isOpen, loadCommentsArticle, article}) {
        const {commentsLoading, id, commentsLoaded} = article;
        if (!this.props.isOpen && isOpen && !commentsLoading && !commentsLoaded) {
            return loadCommentsArticle(id);
        }
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
        const {comments, id, commentsLoading, commentsLoaded} = article;

        if (!commentsLoading && !commentsLoaded) {
            return null;
        }

        if (commentsLoading && !commentsLoaded) {
            return <Loader/>;
        }

        if (!comments.length) {
            return <p>No comments yet</p>;
        }

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

const decorator = connect(null, {loadCommentsArticle: loadCommentsArticle});

export default decorator(toggleOpen(CommentList));
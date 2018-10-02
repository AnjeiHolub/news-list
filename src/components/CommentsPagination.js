import React, {Component} from 'react';
import {connect} from 'react-redux';
import {checkAndLoadCommentsForPage} from '../AC';
import Loader from './Loader';
import {NavLink} from 'react-router-dom';
import Comment from './Comment';

class CommentsPagination extends Component {
    componentWillMount () {
        const {checkAndLoadCommentsForPage , page} = this.props;
        checkAndLoadCommentsForPage(page);
    }

    componentWillReceiveProps({page, checkAndLoadCommentsForPage}) {
        checkAndLoadCommentsForPage(page);
    }

    render () {
        const {total} = this.props;
        if (!total) return <Loader />;

        return (
            <div>
                {this.getCommentItems()}
                {this.getPaginator()}
            </div>
        )
    }

    getCommentItems () {
        const {comments, loading} = this.props;
        if (loading || !comments) return <Loader />;
        const commentItems = comments.map((id) => {
            return <li key = {id}><Comment id = {id} /></li>;
        })

        return (
            <ul>
                {commentItems}
            </ul>
        );
    }

    getPaginator () {
        const {total} = this.props;
        const items = [];

        for (var i = 1; i <= Math.floor((total - 1) / 5) + 1; i++) {
            items.push(<li key = {i}><NavLink to = {`/comments/${i}`} activeStyle = {{color: 'red'}}>{i}</NavLink></li>);
        }

        return <ul>{items}</ul>;
    }

}

const decorator = connect((state, {page}) => {
    const {total, pagination} = state.comments;
    return {
        total: total,
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids'])
    };
}, {checkAndLoadCommentsForPage: checkAndLoadCommentsForPage});

export default decorator(CommentsPagination);
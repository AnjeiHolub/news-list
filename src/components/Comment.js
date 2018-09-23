import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Comment ({comment}) {
    
    return (
        <div>
            <h3>{comment.user}</h3>
            <p>{comment.text}</p>
        </div>
    );
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect (из store)
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
}

const decorator = connect((state, ownProps) => { //state - это стейт стора (стейт всего приложения)
    return {
        comment: state.comments.find((comment) => {
            return comment.id === ownProps.id;
        })
    }
});

export default decorator(Comment);
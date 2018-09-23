//reducer управляющий бизнес логикой комментариев
import {} from '../constants';
import {normalizedComments as defaultComments} from '../fixtures';

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action;

    switch (type) {
    }

    return commentsState;
}
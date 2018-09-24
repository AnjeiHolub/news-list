//reducer управляющий бизнес логикой комментариев
import {} from '../constants';
import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT} from '../constants';
import {arrayToMap} from '../helpers';

export default (commentsState = arrayToMap(defaultComments), action) => {
    const {type, payload, randomId} = action;

    switch (type) {
        case ADD_COMMENT: 
            return {...commentsState, [randomId]: payload.comment}
    }

    return commentsState;
}
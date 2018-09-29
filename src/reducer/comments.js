//reducer управляющий бизнес логикой комментариев
import {} from '../constants';
import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT, LOAD_COMMENTS_ARTICLE, SUCCESS} from '../constants';
import {arrayToMap, mapToArray} from '../helpers';
import {Record, OrderedMap} from 'immutable';

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerState = Record({
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
    const {type, payload, randomId, response} = action;
    switch (type) {
        case ADD_COMMENT: 
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));
        case LOAD_COMMENTS_ARTICLE + SUCCESS:
            return commentsState.update('entities', (entities) => {
                return entities.merge(arrayToMap(response, CommentRecord))
            })
    }

    return commentsState;
}
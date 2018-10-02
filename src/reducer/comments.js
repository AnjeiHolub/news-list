//reducer управляющий бизнес логикой комментариев
import {} from '../constants';
import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT, LOAD_COMMENTS_ARTICLE, SUCCESS, LOAD_COMMENTS_FOR_PAGE, START} from '../constants';
import {arrayToMap, mapToArray} from '../helpers';
import {Record, OrderedMap, Map} from 'immutable';

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
    const {type, payload, randomId, response} = action;
    switch (type) {
        case ADD_COMMENT: 
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));
        case LOAD_COMMENTS_ARTICLE + SUCCESS:
            return commentsState.update('entities', (entities) => {
                return entities.merge(arrayToMap(response, CommentRecord));
            });
        case LOAD_COMMENTS_FOR_PAGE + START:
            return commentsState.setIn(['pagination', payload.page, 'loading'], true);
        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return commentsState
                    .set('total', response.total)
                    .mergeIn(['entities'], arrayToMap(response.records, CommentRecord))
                    .setIn(['pagination', payload.page, 'ids'], response.records.map((comment) => {
                        return comment.id;
                    }))
                    .setIn(['pagination', payload.page, 'loading'], false);
    }

    return commentsState;
}
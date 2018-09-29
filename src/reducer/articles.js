//reducer управляющий бизнес логикой статей
import {ARTICLE_DELETE} from '../constants';
import {ADD_COMMENT} from '../constants';
import {LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, LOAD_COMMENTS_ARTICLE} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrayToMap} from '../helpers';
import {Record, OrderedMap} from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
    loading: false,
    commentsLoading: false,
    commentsLoaded: false,
    comments: []
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (articlesState = defaultState, action) => {
    const {type, payload, response, randomId} = action;

    switch (type) {
        case ARTICLE_DELETE:
            return articlesState.deleteIn(['entities', payload.id]); //immutable предоставляет метод delete
        case ADD_COMMENT:
            //immutable предоставляет метод updateIn - для обновления данных более глубоких уровней 
            //immutable предоставляет метод update - для обновления данных верхних уровней 
            return articlesState.updateIn(
                ['entities', payload.articleId, 'comments'], 
                (comments) => {
                    return comments.concat(randomId);
                }
            );
        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true);
        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                        .set('entities', arrayToMap(response, ArticleRecord))
                        .set('loading', false)
                        .set('loaded', true);
        case LOAD_ARTICLE + START:
            return articlesState.setIn(['entities', payload.id, 'loading'], true);
        case LOAD_ARTICLE + SUCCESS:
            return articlesState.setIn(['entities', payload.id], new ArticleRecord(payload.response));
        case LOAD_COMMENTS_ARTICLE + START:
            return articlesState.setIn(['entities', payload.id, 'commentsLoading'], true);
        case LOAD_COMMENTS_ARTICLE + SUCCESS:
            return articlesState
                        .setIn(['entities', payload.id, 'commentsLoaded'], true)
                        .setIn(['entities', payload.id, 'commentsLoading'], false);
    }

    return articlesState;
}
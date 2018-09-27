//reducer управляющий бизнес логикой статей
import {ARTICLE_DELETE} from '../constants';
import {ADD_COMMENT} from '../constants';
import {LOAD_ALL_ARTICLES, START, SUCCESS} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrayToMap} from '../helpers';
import {Record, OrderedMap} from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
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
    }

    return articlesState;
}
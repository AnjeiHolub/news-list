//reducer управляющий бизнес логикой статей
import {ARTICLE_DELETE} from '../constants';
import {ADD_COMMENT} from '../constants';
import {LOAD_ALL_ARTICLES} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrayToMap} from '../helpers';
import {Map, Record} from 'immutable';

const ArticleRecord = Record({
    text: undefined,
    title: '',
    id: undefined,
    comments: []
});

const defaultState = new Map({});

export default (articlesState = defaultState, action) => {
    const {type, payload, response, randomId} = action;

    switch (type) {
        case ARTICLE_DELETE:
            return articlesState.delete(payload.id); //immutable предоставляет метод delete
        case ADD_COMMENT:
            //immutable предоставляет метод updateIn - для обновления данных более глубоких уровней 
            //immutable предоставляет метод update - для обновления данных верхних уровней 
            return articlesState.updateIn([payload.articleId, 'comments'], (comments) => {
                return comments.concat(randomId);
            });
        case LOAD_ALL_ARTICLES:
            return arrayToMap(response, ArticleRecord);
    }

    return articlesState;
}
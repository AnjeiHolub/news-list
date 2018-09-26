//reducer управляющий бизнес логикой статей
import {ARTICLE_DELETE} from '../constants';
import {ADD_COMMENT} from '../constants';
import {LOAD_ALL_ARTICLES} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrayToMap} from '../helpers';

export default (articlesState = {}, action) => {
    const {type, payload, response, randomId} = action;

    switch (type) {
        case ARTICLE_DELETE: 
            const newArticleState = {...articlesState};
            delete newArticleState[payload.id];
            return newArticleState;
        case ADD_COMMENT:
            const article = articlesState[payload.articleId];
            return {
                ...articlesState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
        case LOAD_ALL_ARTICLES:
            return arrayToMap(response);
    }

    return articlesState;
}
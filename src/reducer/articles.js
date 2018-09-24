//reducer управляющий бизнес логикой статей
import {ARTICLE_DELETE} from '../constants';
import {ADD_COMMENT} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrayToMap} from '../helpers';

export default (articlesState = arrayToMap(defaultArticles), action) => {
    const {type, payload, randomId} = action;

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
    }

    return articlesState;
}
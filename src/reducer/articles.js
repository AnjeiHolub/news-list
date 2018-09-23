//reducer управляющий бизнес логикой статей
import {ARTICLE_DELETE} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';

export default (articlesState = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case ARTICLE_DELETE: 
            const newArticleState = articlesState.filter((article) => {
                return article.id !== payload.id;
            });
            return newArticleState;
    }

    return articlesState;
}
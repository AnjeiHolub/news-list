import {INCREMENT} from '../constants';
import {ARTICLE_DELETE} from '../constants';
import {CHANGE_DATE_RANGE} from '../constants';
import {CHANGE_SELECTION} from '../constants';
import {ADD_COMMENT} from '../constants';
import {LOAD_ALL_ARTICLES} from '../constants';

export function increment () {
    return {
        type: INCREMENT
    }
}

export function articleDelete (id) {
    return {
        type: ARTICLE_DELETE,
        payload: {
            id: id
        }
    }
}

export function changeDateRange ({from, to}) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {
            dateRange: {
                from: from,
                to: to
            }
        }
    }
}

export function changeSelection (selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {
            selected: selected
        }
    }
}

export function addComment ({user, text, articleId}) {
    return {
        type: ADD_COMMENT,
        payload: {
            comment: {
                user: user,
                text: text
            },
            articleId: articleId
        },
        generateId: true
    }
}

export function loadAllArticles () {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}
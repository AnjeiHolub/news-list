import {INCREMENT} from '../constants';
import {ARTICLE_DELETE} from '../constants';

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
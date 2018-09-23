import {INCREMENT} from '../constants';
import {ARTICLE_DELETE} from '../constants';
import {CHANGE_DATE_RANGE} from '../constants';
import {CHANGE_SELECTION} from '../constants';

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
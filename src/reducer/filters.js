//reducer управляющий бизнес логикой фильтров
import {ARTICLE_DELETE} from '../constants';
import {CHANGE_DATE_RANGE} from '../constants';
import {CHANGE_SELECTION} from '../constants';

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const {type, payload} = action;

    switch (type) {
        case ARTICLE_DELETE:
            return {...filters, selected: selected.filter((selectedArticle) => {selectedArticle.id !== payload.id})};
        case CHANGE_DATE_RANGE: 
            return {...filters, dateRange: payload.dateRange};
        case CHANGE_SELECTION:
            return {...filters, selected: payload.selected};
    }

    return filters;
}
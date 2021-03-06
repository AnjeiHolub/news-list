//сборка всех мелких reducer-ов в один комплексный

import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import filtersReducer from './filters';
import commentsReducer from './comments';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    filters: filtersReducer,
    comments: commentsReducer
})
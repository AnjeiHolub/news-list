import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId';
import api from '../middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, generateId, api, logger);

const store = createStore(reducer, {}, enhancer);

export default store;
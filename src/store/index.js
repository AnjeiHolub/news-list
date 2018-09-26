import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId';
import api from '../middlewares/api';

const enhancer = applyMiddleware(generateId, api, logger);

const store = createStore(reducer, {}, enhancer);

export default store;
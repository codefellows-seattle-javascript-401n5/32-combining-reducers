import { createStore, combineReducers } from 'redux';
import category from '../reducer/category';
import expense from '../reducer/expense';

const appReducer = combineReducers({category, expense});

export default () => createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
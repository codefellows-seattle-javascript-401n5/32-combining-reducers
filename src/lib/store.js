import { createStore, combineReducers } from 'redux';
//import reducer from '../reducer/index-reducer';

//import {  } from 'redux';
import category from '../reducer/category';
import expense from '../reducer/expense';
//import indexReducer from '../reducer/index-reducer';

const indexReducer = combineReducers({category, expense});


export default () => createStore(indexReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
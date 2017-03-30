import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import films from './films';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    films
});

export default rootReducer;
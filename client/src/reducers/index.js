import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combinedReducers({
    item: itemReducer,
})
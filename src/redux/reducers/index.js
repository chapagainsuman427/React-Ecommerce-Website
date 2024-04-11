import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { someReducerReducer } from './someReducer';

const reducers = combineReducers({
    allProducts: productReducer,
});

export default reducers;

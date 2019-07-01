import { combineReducers } from 'redux';
import signInReducer from './signInReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    signIn: signInReducer,
    todo: todoReducer
})

export default rootReducer;


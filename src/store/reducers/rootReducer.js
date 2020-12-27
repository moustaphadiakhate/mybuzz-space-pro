import authReducer from './authReducer';
import buzzReducer from './buzzReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth : authReducer,
    buzz : buzzReducer,
});

export default rootReducer
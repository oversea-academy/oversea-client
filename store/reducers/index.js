import userSignedReducer from './userSignedReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  userSigned: userSignedReducer
});

export default reducers;

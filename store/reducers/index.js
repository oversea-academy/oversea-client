import userSignedReducer from './userSignedReducer';
import userProfileReducer from './userProfileReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  userSigned: userSignedReducer,
  userProfile: userProfileReducer
});

export default reducers;

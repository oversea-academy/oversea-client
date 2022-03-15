import userProfileReducer from './userProfileReducer';
import userRolesReducer from './userRolesReducer';
import userSignedReducer from './userSignedReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  userProfile: userProfileReducer,
  userRoles: userRolesReducer,
  userSigned: userSignedReducer
});

export default reducers;

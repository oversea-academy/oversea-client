import { SET_PROFILE } from '../actions/userProfileAction';

const userProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.data;
    default:
      return state;
  }
};

export default userProfileReducer;

import { SET_SIGNED, SET_SIGNOUT } from '../actions/userSignedAction';

const userSignedReducer = (state = { value: false }, action) => {
  switch (action.type) {
    case SET_SIGNED:
      return { ...state, value: true };
    case SET_SIGNOUT:
      return { ...state, value: false };
    default:
      return { ...state };
  }
};

export default userSignedReducer;

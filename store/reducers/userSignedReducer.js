import { SET_SIGNED } from '../actions/userSignedAction';

const userSignedReducer = (state = { value: false }, action) => {
  switch (action.type) {
    case SET_SIGNED:
      return { ...state, value: true };
    default:
      return { ...state };
  }
};

export default userSignedReducer;

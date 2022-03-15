import { SET_ROLES } from '../actions/userRolesAction';

const userRolesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ROLES:
      return action.data;
    default:
      return state;
  }
};

export default userRolesReducer;

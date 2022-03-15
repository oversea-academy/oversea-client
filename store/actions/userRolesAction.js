// Actions Types
export const SET_ROLES = 'SET_ROLES';

// Actions Creator
export const setRoles = (data) => {
  return { type: SET_ROLES, data: data };
};

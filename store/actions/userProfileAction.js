// Actions Types
export const SET_PROFILE = 'SET_PROFILE';

// Actions Creator
export const setProfile = (data) => {
  return { type: SET_PROFILE, data: data };
};

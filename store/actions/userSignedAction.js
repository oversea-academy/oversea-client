// Actions Types
export const SET_SIGNED = 'SET_SIGNED';
export const SET_SIGNOUT = 'SET_SIGNOUT';

// Actions Creator
export const setSigned = () => {
  return { type: SET_SIGNED };
};

export const setSignout = () => {
  return { type: SET_SIGNOUT };
};

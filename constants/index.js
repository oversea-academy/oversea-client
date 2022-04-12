export const SERVER = process.env.SERVER || 'development';
export const API_URL = process.env.API_URL;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_TAG_MANAGER_ID = process.env.GOOGLE_TAG_MANAGER_ID;
export const GOOGLE_TAG_MANAGER_AUTH = process.env.GOOGLE_TAG_MANAGER_AUTH;
export const GOOGLE_TAG_MANAGER_PREVIEW = process.env.GOOGLE_TAG_MANAGER_PREVIEW;

export const IS_LIVE = SERVER === 'production' ? true : false;
export const ROLE = {
  ADMIN: 'admin'
};

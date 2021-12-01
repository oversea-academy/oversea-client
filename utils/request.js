import Axios from 'axios';
import { API_URL } from '../constants';

export function Request() {
  return Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

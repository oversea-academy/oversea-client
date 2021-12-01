import Axios from 'axios';

const token = '';

const instance = Axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default instance;

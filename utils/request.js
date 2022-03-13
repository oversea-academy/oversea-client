import Axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

const instance = Axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default instance;

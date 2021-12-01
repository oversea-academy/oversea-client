import request from '../utils/request';

function getMain() {
  return new Promise((resolve, reject) => {
    request
      .get('/')
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function postLogin(data) {
  return new Promise((resolve, reject) => {
    request
      .post('/login', {
        email: data.email,
        password: data.password
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  getMain,
  postLogin
};

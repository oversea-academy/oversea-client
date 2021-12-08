import request from '../utils/request';

function getMeta() {
  return new Promise((resolve, reject) => {
    request
      .get('/meta_')
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

function logout() {
  return new Promise((resolve, reject) => {
    request
      .get('/logout')
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  getMeta,
  logout,
  postLogin
};

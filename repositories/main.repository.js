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

function postLoginWithGoogle(data) {
  return new Promise((resolve, reject) => {
    request
      .post('/login/google', {
        tokenId: data.tokenId
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function registerAccount(data) {
  return new Promise((resolve, reject) => {
    request
      .post('/register', {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        phone_number: data.phone_number
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
  postLogin,
  postLoginWithGoogle,
  registerAccount
};

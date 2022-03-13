import request from '../utils/request';
import handleErrorResponse from '../utils/handleErrorResponse';

class AccountRepo {
  getProfile() {
    return new Promise((resolve) => {
      request
        .get('/account/profile')
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  postLogin(data) {
    return new Promise((resolve) => {
      request
        .post('/account/login', {
          email: data.email,
          password: data.password
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  postLoginWithGoogle(data) {
    return new Promise((resolve) => {
      request
        .post('/account/login/google', {
          tokenId: data.tokenId
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  registerAccount(data) {
    return new Promise((resolve) => {
      request
        .post('/account/register', {
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
          resolve(handleErrorResponse(err));
        });
    });
  }
}

export default new AccountRepo();

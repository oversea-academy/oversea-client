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

export default {
  getMain
};

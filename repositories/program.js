import request from '../utils/request';
import handleErrorResponse from '../utils/handleErrorResponse';

class Program {
  deleteProgram(programId) {
    return new Promise((resolve) => {
      request
        .delete(`/program/${programId}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }
}

export default new Program();

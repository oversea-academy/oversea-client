import request from '../utils/request';
import handleErrorResponse from '../utils/handleErrorResponse';

class ProgramRegisterRepo {
  postProgramRegister(data) {
    return new Promise((resolve) => {
      request
        .post('/program/register', {
          program_id: data.program_id,
          name: data.name,
          email: data.email,
          whatsapp: data.whatsapp,
          birth_date: data.birth_date,
          institution: data.institution,
          city: data.city,
          amount: data.amount
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  getProgramRegisterById(id) {
    return new Promise((resolve) => {
      request
        .get(`/program/register/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  getProgramRegisterStatus() {
    return new Promise((resolve) => {
      request
        .get(`/program/register/status`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  updateProgramRegisterStatus(programRegisterId, data) {
    return new Promise((resolve) => {
      request
        .put(`/program/register/${programRegisterId}`, {
          ref_register_status_id: data.ref_register_status_id
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  getProgramRegister(data) {
    const page = data.page || 1;
    const limit = data.limit || 10;
    return new Promise((resolve) => {
      request
        .get(`/program/register?page=${page}&limit=${limit}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }

  deleteProgramRegister(programRegisterId) {
    return new Promise((resolve) => {
      request
        .delete(`/program/register/${programRegisterId}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          resolve(handleErrorResponse(err));
        });
    });
  }
}

export default new ProgramRegisterRepo();

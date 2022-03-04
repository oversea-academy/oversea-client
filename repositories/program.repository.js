import request from '../utils/request';
import handleErrorResponse from '../utils/handleErrorResponse';

function postProgramClass(data) {
  return new Promise((resolve) => {
    request
      .post('/program/class', {
        name: data.name,
        description: data.description,
        slug: data.slug,
        total_hour: data.total_hour,
        total_meet: data.total_meet,
        learning_goal: data.learning_goal,
        facility: data.facility,
        schedule_day: data.schedule_day,
        schedule_time: data.schedule_time,
        price: data.price,
        price_normal: data.price_normal,
        closed_at: data.closed_at,
        ref_class_type: data.ref_class_type
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        resolve(handleErrorResponse(err));
      });
  });
}

function getProgramClass(data) {
  const page = data.page || 1;
  const limit = data.limit || 6;
  const type = data.type || '';
  return new Promise((resolve) => {
    request
      .get(`/program/class?page=${page}&limit=${limit}&type=${type}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        resolve(handleErrorResponse(err));
      });
  });
}

function getProgramClassBySlug(slug) {
  return new Promise((resolve) => {
    request
      .get(`/program/class/slug/${slug}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        resolve(handleErrorResponse(err));
      });
  });
}

function getProgramClassById(id) {
  return new Promise((resolve) => {
    request
      .get(`/program/class/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        resolve(handleErrorResponse(err));
      });
  });
}

function postProgramRegister(data) {
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

function getProgramRegisterById(id) {
  return new Promise((resolve) => {
    request
      .get(`https://620a0b9292946600171c571b.mockapi.io/program_register/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        resolve(handleErrorResponse(err));
      });
  });
}

function getProgramRegisterStatus() {
  return new Promise((resolve) => {
    request
      .get(`https://620a0b9292946600171c571b.mockapi.io/program_register_status/1`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        resolve(handleErrorResponse(err));
      });
  });
}

function updateProgramRegisterStatus(programRegisterId, data) {
  return new Promise((resolve) => {
    request
      .put(`/program/register/status/${programRegisterId}`, {
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

export default {
  postProgramClass,
  getProgramClass,
  getProgramClassBySlug,
  getProgramClassById,
  postProgramRegister,
  getProgramRegisterById,
  getProgramRegisterStatus,
  updateProgramRegisterStatus
};

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
        discount: data.discount,
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

export default {
  postProgramClass,
  getProgramClass,
  getProgramClassBySlug
};

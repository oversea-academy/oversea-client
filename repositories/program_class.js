import request from '../utils/request';
import handleErrorResponse from '../utils/handleErrorResponse';

class ProgramClassRepo {
  postProgramClass(data) {
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
          started_at: data.started_at,
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

  getProgramClass(data) {
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

  getProgramClassBySlug(slug) {
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

  getProgramClassById(id) {
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

  updateProgramClass(programClassId, data) {
    return new Promise((resolve) => {
      request
        .put(`/program/class/${programClassId}`, {
          program_id: data.program_id,
          total_hour: data.total_hour,
          total_meet: data.total_meet,
          learning_goal: data.learning_goal,
          facility: data.facility,
          schedule_day: data.schedule_day,
          schedule_time: data.schedule_time,
          price: data.price,
          price_normal: data.price_normal,
          ref_class_type: data.ref_class_type,
          started_at: data.started_at,
          closed_at: data.closed_at,
          description: data.description
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

export default new ProgramClassRepo();

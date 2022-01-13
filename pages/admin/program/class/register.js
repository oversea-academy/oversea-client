import Head from 'next/head';
import { useState } from 'react';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import { programRepository } from '../../../../repositories';

function Admin() {
  const [payload, setPayload] = useState({});

  const handlePayload = (e, key) => {
    if (key) {
      let payloadTemp = {
        ...payload,
        [key]: e.target.value
      };
      setPayload(payloadTemp);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await programRepository.postProgramClass(payload);
    if (response?.status) {
      console.log('success');
    } else {
      alert('error');
    }
  };

  return (
    <div>
      <Head>
        <title>Oversea Academy | Admin</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AdminMenu>
          <div>
            <div className="text-xl">Register Class</div>
            <div className="max-w-md">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  value={payload.name}
                  onChange={(e) => handlePayload(e, 'name')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                  value={payload.description}
                  onChange={(e) => handlePayload(e, 'description')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Slug</span>
                </label>
                <input
                  type="text"
                  placeholder="Slug"
                  className="input input-bordered"
                  value={payload.slug}
                  onChange={(e) => handlePayload(e, 'slug')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Hour</span>
                </label>
                <input
                  type="number"
                  placeholder="Total Hour"
                  className="input input-bordered"
                  value={payload.total_hour}
                  onChange={(e) => handlePayload(e, 'total_hour')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Meet</span>
                </label>
                <input
                  type="number"
                  placeholder="Total Meet"
                  className="input input-bordered"
                  value={payload.total_meet}
                  onChange={(e) => handlePayload(e, 'total_meet')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Learning Goal</span>
                </label>
                <textarea
                  className="textarea h-24 textarea-bordered"
                  placeholder="Learning Goal"
                  value={payload.learning_goal}
                  onChange={(e) => handlePayload(e, 'learning_goal')}
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Facility</span>
                </label>
                <textarea
                  className="textarea h-24 textarea-bordered"
                  placeholder="Facility"
                  value={payload.facility}
                  onChange={(e) => handlePayload(e, 'facility')}
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Schedule Day</span>
                </label>
                <input
                  type="text"
                  placeholder="Schedule Day"
                  className="input input-bordered"
                  value={payload.schedule_day}
                  onChange={(e) => handlePayload(e, 'schedule_day')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Schedule Time</span>
                </label>
                <input
                  type="text"
                  placeholder="Schedule Time"
                  className="input input-bordered"
                  value={payload.schedule_time}
                  onChange={(e) => handlePayload(e, 'schedule_time')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  value={payload.price}
                  onChange={(e) => handlePayload(e, 'price')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discount</span>
                </label>
                <input
                  type="number"
                  placeholder="Discount"
                  className="input input-bordered"
                  value={payload.discount}
                  onChange={(e) => handlePayload(e, 'discount')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Class Type"
                  className="input input-bordered"
                  value={payload.ref_class_type}
                  onChange={(e) => handlePayload(e, 'ref_class_type')}
                />
              </div>
              <div className="form-control mt-8">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </AdminMenu>
      </main>
    </div>
  );
}

export default AuthenticatedRoute(Admin, { role: 'admin' });

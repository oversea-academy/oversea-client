import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import { programRepository } from '../../../../repositories';

function Admin() {
    const [payload, setPayload] = useState({});

    const createSlug = (txt) => txt.replace(/\s+/g, '-').toLowerCase();
    const handlePayload = (e, key) => {
        if (key) {
          let payloadTemp = {
            ...payload,
            [key]: e.target.value
          };
          setPayload(payloadTemp);
        }
      };
    const handleName = (e) => {
        setPayload({
            "name" : e.target.value,
            "slug" : createSlug(e.target.value)
        });
    };

    const router = useRouter();
    const handleBackBtn = () => router.push("/admin/program/class");
    var handleSaveBtn = async (e) => {
        e.preventDefault();
        const response = await programRepository.postProgramClass(payload);
        if (response?.status) {
            console.log('success');
        } else {
            alert('error');
        }
    }

    return (
        <div>
        <Head>
            <title>Oversea Academy | Admin</title>
            <meta name="description" content="Oversea Academy" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <AdminMenu>
                <div className="container px-20 py-16 mb-8 bg-primary-content rounded-lg shadow-lg">
                    <div className="flex justify-start">
                        <p className="text-primary font-bold text-3xl">Buat Kelas</p>
                    </div>
                    <form>
                        {/* Name */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Nama</label>
                            <input
                                required
                                type="text"
                                placeholder="Name"
                                value={payload.name}
                                onChange={handleName}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Desc */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Deskripsi</label>
                            <input
                                required
                                type="text"
                                placeholder="Description"
                                value={payload.description}
                                onChange={(e) => handlePayload(e, 'description')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Slug */}
                        <div className="flex flex-row my-6">
                            <label className="w-48 my-auto">Slug</label>
                            <p className="text-primary font-medium">{payload.slug}</p>
                        </div>
                        {/* Total Hour */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Total Jam</label>
                            <input
                                required
                                type="number"
                                placeholder="Total Hour"
                                value={payload.total_hour}
                                onChange={(e) => handlePayload(e, 'total_hour')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Total Meet */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Total Meet</label>
                            <input
                                required
                                type="number"
                                placeholder="Total Meet"
                                value={payload.total_meet}
                                onChange={(e) => handlePayload(e, 'total_meet')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Learning Goal */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Tujuan Pembelajaran</label>
                            <textarea
                                required
                                type="textarea"
                                placeholder="Learning Goals"
                                value={payload.learning_goal}
                                onChange={(e) => handlePayload(e, 'learning_goal')}
                                className="w-full h-20 rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Facility */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 h-20 my-auto">Fasilitas</label>
                            <textarea
                                required
                                type="textarea"
                                placeholder="Facility"
                                value={payload.facility}
                                onChange={(e) => handlePayload(e, 'facility')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Schedule Day */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Jadwal Hari</label>
                            <input
                                required
                                type="text"
                                placeholder="Schedule Day"
                                value={payload.schedule_day}
                                onChange={(e) => handlePayload(e, 'schedule_day')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Schedule Time */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Jadwal Waktu</label>
                            <input
                                required
                                type="text"
                                placeholder="Schedule Time"
                                value={payload.schedule_time}
                                onChange={(e) => handlePayload(e, 'schedule_time')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Price */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Harga</label>
                            <input
                                required
                                type="number"
                                placeholder="Price"
                                value={payload.price}
                                onChange={(e) => handlePayload(e, 'price')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        {/* Class Type */}
                        <div className="flex flex-row my-6">
                            <label className="w-64 my-auto">Tipe Kelas</label>
                            <input
                                required
                                type="text"
                                placeholder="Class Type"
                                value={payload.ref_class_type}
                                onChange={(e) => handlePayload(e, 'ref_class_type')}
                                className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                            />
                        </div>
                        <div className="flex justify-end gap-6">
                            <button className="btn btn-accent" onClick={handleBackBtn}>Kembali</button>
                            <button className="btn btn-primary" onClick={handleSaveBtn}>Simpan</button>
                        </div>
                    </form>
                </div>
            </AdminMenu>
        </main>
        </div>
    );
}

export default AuthenticatedRoute(Admin, { role: 'admin' });
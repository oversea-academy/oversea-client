import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import { programRepository } from '../../../../repositories';
import toastRun from '../../../../utils/toastRun';

function CreateProgramClass() {
  const [payload, setPayload] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
      ...payload,
      name: e.target.value,
      slug: createSlug(e.target.value)
    });
  };

  const router = useRouter();
  const handleBackBtn = () => router.push('/admin/program/class');
  const handleSaveBtn = async (e) => {
    e.preventDefault();
    if (
      payload.name &&
      payload.description &&
      payload.slug &&
      payload.total_hour &&
      payload.total_meet &&
      payload.learning_goal &&
      payload.facility &&
      payload.schedule_day &&
      payload.schedule_time &&
      payload.price &&
      payload.price_normal &&
      payload.closed_at &&
      payload.ref_class_type
    ) {
      setIsLoading(true);
      const response = await programRepository.postProgramClass(payload);
      if (response?.status) {
        toastRun.success('Kelas baru berhasil ditambahkan!');
      } else {
        toastRun.error(response.message || 'API Error');
      }
      setIsLoading(false);
    } else {
      toastRun.error('Form tidak lengkap');
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
                  placeholder="Contoh: Kelas IELTS Regular"
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
                  placeholder="Contoh: Belajar persiapan IELTS"
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
                  placeholder="Jumlah jam belajar"
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
                  placeholder="Jumlah pertemuan"
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
                  placeholder="Isi tujuan pembelajaran"
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
                  placeholder="List fasilitas dipisahkan dengan semicolon, contoh: point 1;point 2"
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
                  placeholder="Contoh: Setiap Senin, Rabu, dan Jumat"
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
                  placeholder="Contoh: Pukul 19.00-21.30 WIB"
                  value={payload.schedule_time}
                  onChange={(e) => handlePayload(e, 'schedule_time')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              </div>
              {/* Price Normal*/}
              <div className="flex flex-row my-6">
                <label className="w-64 my-auto">Harga Normal</label>
                <input
                  required
                  type="number"
                  placeholder="Harga asli"
                  value={payload.price_normal}
                  onChange={(e) => handlePayload(e, 'price_normal')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              </div>
              {/* Price */}
              <div className="flex flex-row my-6">
                <label className="w-64 my-auto">Harga</label>
                <input
                  required
                  type="number"
                  placeholder="Harga penawaran"
                  value={payload.price}
                  onChange={(e) => handlePayload(e, 'price')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              </div>
              {/* Closed At */}
              <div className="flex flex-row my-6">
                <label className="w-64 my-auto">Tanggal Penutupan</label>
                <input
                  required
                  type="date"
                  placeholder="Tanggal penutupan kelas"
                  value={payload.closed_at}
                  onChange={(e) => handlePayload(e, 'closed_at')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              </div>
              {/* Class Type */}
              <div className="flex flex-row my-6">
                <label className="w-64 my-auto">Tipe Kelas</label>
                <input
                  required
                  type="text"
                  placeholder="Contoh: ielts;basic"
                  value={payload.ref_class_type}
                  onChange={(e) => handlePayload(e, 'ref_class_type')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              </div>
              <div className="flex justify-end gap-6">
                <button className="btn btn-accent" onClick={handleBackBtn}>
                  Kembali
                </button>
                {isLoading ? (
                  <button className="btn btn-primary" disabled>
                    Loading...
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={handleSaveBtn}>
                    Simpan
                  </button>
                )}
              </div>
            </form>
          </div>
        </AdminMenu>
      </main>
    </div>
  );
}

export default AuthenticatedRoute(CreateProgramClass, { role: 'admin' });

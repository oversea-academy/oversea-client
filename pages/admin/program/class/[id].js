import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DayJs from 'dayjs';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import { programRepository } from '../../../../repositories';

function Admin() {
  const router = useRouter();
  const { id } = router.query;

  const [dataKelas, setDataKelas] = useState({
    loading: true,
    data: []
  });

  useEffect(async () => {
    setDataKelas({
      loading: true,
      data: []
    });
    if (id !== undefined) {
      const result = await programRepository.getProgramClassById(id);
      if (result.status) {
        setDataKelas({
          loading: false,
          data: result.data
        });
      }
    }
  }, [id]);

  const handleBackBtn = () => router.push('/admin/program/class');
  const handleChangeBtn = (e) => {
    e.preventDefault();
    alert('Button ubah diklik');
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
          <div className="container px-20 py-16 mb-8 bg-primary-content rounded-lg shadow-lg text-sm md:text-base">
            <div className="flex justify-start">
              <p className="text-primary font-bold text-3xl">Buat Kelas</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Nama</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.name}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Deskripsi</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.description}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Slug</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.slug}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Total Jam</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.total_hour}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Total Meet</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.total_meet}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 justify-between font-semibold">
                <p className="w-56">Tujuan Pembelajaran</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.learning_goal}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 justify-between font-semibold">
                <p className="w-56">Fasilitas</p>
                <p className="mr-4">:</p>
              </div>
              <ul className="list-disc ml-4">
                {dataKelas.data.facilities?.map((it, index) => (
                  <li key={index}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Jadwal Hari</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.schedule_day}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Jadwal Waktu</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.schedule_time}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Harga</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.price}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Harga Normal</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.price_normal}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Tipe Kelas</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.class_type}</p>
            </div>
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="">Penutupan Kelas</p>
                <p className="mr-4">:</p>
              </div>
              <p>{dataKelas.data.closed_at ? DayJs(dataKelas.data.closed_at).format('DD MMM YYYY HH:mm A') : ''}</p>
            </div>
            <div className="flex justify-end gap-4 md:gap-6">
              <button className="btn btn-accent text-xs md:text-sm" onClick={handleBackBtn}>
                Kembali
              </button>
              <button className="btn btn-primary text-xs md:text-sm" onClick={handleChangeBtn}>
                Ubah
              </button>
            </div>
          </div>
        </AdminMenu>
      </main>
    </div>
  );
}

export default AuthenticatedRoute(Admin, { role: 'admin' });

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DayJs, { Dayjs } from 'dayjs';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import ModalConfirm from '../../../../components/ModalConfirm';
import AdminMenu from '../../../../components/AdminMenu';
import { ProgramClassRepo } from '../../../../repositories';
import toastRun from '../../../../utils/toastRun';

function Admin() {
  const router = useRouter();
  const { id } = router.query;
  const _ = require('lodash');

  const [dataKelas, setDataKelas] = useState({
    loading: true,
    data: {}
  });
  const [dataTemp, setDataTemp] = useState({
    isEqual: false,
    data: {}
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isStillChanging, setIsStillChanging] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleData = (e, key) => {
    if (key) {
      let temp = {
        ...dataTemp.data,
        [key]: e.target.value
      };
      _.isEqual(temp, dataKelas.data)
        ? setDataTemp({ isEqual: true, data: temp })
        : setDataTemp({ isEqual: false, data: temp });
    }
  };
  const createSlug = (txt) => txt.replace(/\s+/g, '-').toLowerCase();
  const handleName = (e) => {
    let temp = {
      ...dataTemp.data,
      name: e.target.value,
      slug: createSlug(e.target.value)
    };
    _.isEqual(temp, dataKelas.data)
      ? setDataTemp({ isEqual: true, data: temp })
      : setDataTemp({ isEqual: false, data: temp });
  };

  useEffect(async () => {
    setDataKelas({ loading: true, data: {} });
    setDataTemp({ isEqual: false, data: {} });
    if (id !== undefined) {
      getDataKelas(id);
    }
  }, [id]);

  const onConfirm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await ProgramClassRepo.updateProgramClass(id, dataTemp.data);

    if (response?.status) {
      getDataKelas(id);
      toastRun.success('Program kelas berhasil diubah!');
    } else {
      toastRun.error(response.message || 'API Error');
    }
    setIsLoading(false);
    setIsShowModal(false);
    setIsStillChanging(false);
    setDataTemp({ isEqual: false, data: {} });
  };

  const getDataKelas = async (programKelasId) => {
    const result = await ProgramClassRepo.getProgramClassById(programKelasId);
    if (result.status) {
      setDataKelas({
        loading: false,
        data: result.data
      });
    }
  };

  const handleBackBtn = () => router.push('/admin/program/class');
  const handleChangeBtn = (e) => {
    setIsStillChanging(true);
    setDataTemp({ isEqual: true, data: { ...dataKelas.data } });
  };
  const handleCancelBtn = () => setIsStillChanging(false);
  const handleSaveBtn = () => {
    if (!dataTemp.isEqual) {
      setIsShowModal(true);
    } else {
      toastRun.error('Tidak ada perubahan'); // Never executed
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
          <div className="container px-20 py-16 mb-8 bg-primary-content rounded-lg shadow-lg text-sm md:text-base">
            <div className="flex justify-start">
              <p className="text-primary font-bold text-3xl">Detail Kelas</p>
            </div>
            {/* Name */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Nama</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="text"
                  placeholder="Contoh: Kelas IELTS Regular"
                  value={dataTemp.data.name}
                  onChange={handleName}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.name}</p>
              )}
            </div>
            {/* Desc */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Deskripsi</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="text"
                  placeholder="Contoh: Belajar persiapan IELTS"
                  value={dataTemp.data.description}
                  onChange={(e) => handleData(e, 'description')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.description}</p>
              )}
            </div>
            {/* Slug */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Slug</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <p className="text-primary font-medium">{dataTemp.data.slug}</p>
              ) : (
                <p>{dataKelas.data.slug}</p>
              )}
            </div>
            {/* Total Hour */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Total Jam</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="number"
                  placeholder="Jumlah jam belajar"
                  value={dataTemp.data.total_hour}
                  onChange={(e) => handleData(e, 'total_hour')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.total_hour}</p>
              )}
            </div>
            {/* Total Meet */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Total Meet</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="number"
                  placeholder="Jumlah pertemuan"
                  value={dataTemp.data.total_meet}
                  onChange={(e) => handleData(e, 'total_meet')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.total_meet}</p>
              )}
            </div>
            {/* Learning Goal */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 justify-between font-semibold">
                <p className="w-56">Tujuan Pembelajaran</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <textarea
                  required
                  type="textarea"
                  placeholder="Isi tujuan pembelajaran"
                  value={dataTemp.data.learning_goal}
                  onChange={(e) => handleData(e, 'learning_goal')}
                  className="w-full h-20 rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.learning_goal}</p>
              )}
            </div>
            {/* Facility */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 justify-between font-semibold">
                <p className="w-56">Fasilitas</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <textarea
                  required
                  type="textarea"
                  placeholder="List fasilitas dipisahkan dengan semicolon, contoh: point 1;point 2"
                  value={dataTemp.data.facilities}
                  onChange={(e) => handleData(e, 'facilities')}
                  className="w-full h-20 rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <ul className="list-disc ml-4">
                  {dataKelas.data.facilities?.map((it, index) => (
                    <li key={index}>{it}</li>
                  ))}
                </ul>
              )}
            </div>
            {/* Schedule Day */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Jadwal Hari</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="text"
                  placeholder="Contoh: Setiap Senin, Rabu, dan Jumat"
                  value={dataTemp.data.schedule_day}
                  onChange={(e) => handleData(e, 'schedule_day')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.schedule_day}</p>
              )}
            </div>
            {/* Schedule Time */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Jadwal Waktu</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="text"
                  placeholder="Contoh: Pukul 19.00-21.30 WIB"
                  value={dataTemp.data.schedule_time}
                  onChange={(e) => handleData(e, 'schedule_time')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.schedule_time}</p>
              )}
            </div>
            {/* Price */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Harga</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="number"
                  placeholder="Harga penawaran"
                  value={dataTemp.data.price}
                  onChange={(e) => handleData(e, 'price')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.price}</p>
              )}
            </div>
            {/* Price Normal*/}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Harga Normal</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="number"
                  placeholder="Harga asli"
                  value={dataTemp.data.price_normal}
                  onChange={(e) => handleData(e, 'price_normal')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.price_normal}</p>
              )}
            </div>
            {/* Closed At */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Penutupan Kelas</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="date"
                  placeholder="Tanggal penutupan kelas"
                  value={DayJs(dataTemp.data.closed_at).format('YYYY-MM-DD')}
                  onChange={(e) => handleData(e, 'closed_at')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.closed_at ? DayJs(dataKelas.data.closed_at).format('DD MMM YYYY HH:mm A') : ''}</p>
              )}
            </div>
            {/* Class Type */}
            <div className="flex flex-col md:flex-row my-6">
              <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                <p className="w-56">Tipe Kelas</p>
                <p className="mr-4">:</p>
              </div>
              {isStillChanging ? (
                <input
                  required
                  type="text"
                  placeholder="Contoh: ielts;basic"
                  value={dataTemp.data.class_type}
                  onChange={(e) => handleData(e, 'class_type')}
                  className="w-full rounded-lg py-2 px-4 border bg-primary-content text-gray-700 text-sm focus-within:ring focus-within:ring-accent focus-within:ring-opacity-40 focus:outline-none focus:placeholder-transparent"
                />
              ) : (
                <p>{dataKelas.data.class_type}</p>
              )}
            </div>
            {/* Button */}
            {isStillChanging ? (
              <div className="flex justify-end gap-4 md:gap-6">
                <button className="btn btn-accent text-xs md:text-sm" onClick={handleCancelBtn}>
                  Batal
                </button>
                <button
                  className="btn btn-primary text-xs md:text-sm"
                  onClick={handleSaveBtn}
                  disabled={dataTemp.isEqual ? true : false}
                >
                  Simpan
                </button>
              </div>
            ) : (
              <div className="flex justify-end gap-4 md:gap-6">
                <button className="btn btn-accent text-xs md:text-sm" onClick={handleBackBtn}>
                  Kembali
                </button>
                <button className="btn btn-primary text-xs md:text-sm" onClick={handleChangeBtn}>
                  Ubah
                </button>
              </div>
            )}
          </div>
        </AdminMenu>
        <ModalConfirm
          title="Yakin mau mengubah program kelas ini?"
          description="Pastikan kembali status sudah benar"
          isShow={isShowModal}
          isLoading={isLoading}
          onConfirm={onConfirm}
          onCancel={() => setIsShowModal(false)}
        ></ModalConfirm>
      </main>
    </div>
  );
}

export default AuthenticatedRoute(Admin, { role: 'admin' });

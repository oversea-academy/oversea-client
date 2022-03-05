import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import DayJs from 'dayjs';
import AuthenticatedRoute from '../../../components/AuthenticatedRoute';
import AdminMenu from '../../../components/AdminMenu';
import ModalConfirm from '../../../components/ModalConfirm';
import { programRepository } from '../../../repositories';
import { ROLE } from '../../../constants';
import toastRun from '../../../utils/toastRun';

function DetailRegister() {
  const router = useRouter();
  const { id } = router.query;

  const [dataRegister, setDataRegister] = useState({
    loading: true,
    data: []
  });
  const [isStatusUpdate, setIsStatusUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [listStatus, setListStatus] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(async () => {
    setDataRegister({
      loading: true,
      data: {}
    });
    if (id !== undefined) {
      getDataRegister(id);
    }
  }, [id]);

  useEffect(async () => {
    const result = await programRepository.getProgramRegisterStatus();
    if (result.status) {
      setListStatus(result.data);
    }
  }, []);

  const handleBackBtn = () => router.push('/admin/register');
  const onConfirm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await programRepository.updateProgramRegisterStatus(id, {
      ref_register_status_id: selectedStatus
    });

    if (response?.status) {
      getDataRegister(id);
      toastRun.success('Status berhasil diubah!');
    } else {
      toastRun.error(response.message || 'API Error');
    }
    setIsLoading(false);
    setIsShowModal(false);
    setIsStatusUpdate(false);
  };

  const onSelectStatus = (e) => {
    setSelectedStatus(e.target.value);
  };

  const onHandleShowModal = () => {
    if (selectedStatus) {
      setIsShowModal(true);
    } else {
      toastRun.error('Status belum dipilih');
    }
  };

  const handleChangeStatus = () => {
    setIsStatusUpdate(true);
    setSelectedStatus(null);
  };

  const getDataRegister = async (programRegisterId) => {
    const result = await programRepository.getProgramRegisterById(programRegisterId);
    if (result.status) {
      setDataRegister({
        loading: false,
        data: result.data
      });
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
            <div className="flex justify-start mb-10">
              <p className="text-primary font-bold text-3xl">Detail Pendaftaran</p>
            </div>
            {dataRegister.loading ? (
              <div className="text-xl">Loading...</div>
            ) : (
              <div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Nama Program</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>{dataRegister.data.program_name}</p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Nama Pendaftar</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>{dataRegister.data.name}</p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Email</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>{dataRegister.data.email}</p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Nomor Whatsapp</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>{dataRegister.data.whatsapp}</p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 justify-between font-semibold">
                    <p className="w-56">Tanggal Lahir</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>{dataRegister.data.birth_date}</p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 justify-between font-semibold">
                    <p className="w-56">Institusi</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>{dataRegister.data.institution}</p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Kota Domisili</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>{dataRegister.data.city}</p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Status</p>
                    <p className="mr-4">:</p>
                  </div>
                  {isStatusUpdate ? (
                    <div className="flex gap-3">
                      <select className="select select-bordered w-full max-w-xs" onChange={onSelectStatus}>
                        <option disabled selected>
                          Pilih status
                        </option>
                        {listStatus.map((item, index) => (
                          <option key={index} value={item.value}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      <button className="btn btn-error" onClick={() => setIsStatusUpdate(false)}>
                        Cancel
                      </button>
                      <button className="btn btn-success" onClick={onHandleShowModal}>
                        OK
                      </button>
                    </div>
                  ) : (
                    <p>{dataRegister.data.status}</p>
                  )}
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Tanggal Dibuat</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>
                    {dataRegister.data.created_at
                      ? DayJs(dataRegister.data.created_at).format('DD MMM YYYY HH:mm A')
                      : ''}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                  <div className="flex flex-row w-48 md:w-56 my-auto justify-between font-semibold">
                    <p className="">Tanggal Diupdate</p>
                    <p className="mr-4">:</p>
                  </div>
                  <p>
                    {dataRegister.data.updated_at
                      ? DayJs(dataRegister.data.updated_at).format('DD MMM YYYY HH:mm A')
                      : ''}
                  </p>
                </div>
                <div className="flex justify-end gap-4 md:gap-6">
                  <button className="btn btn-accent text-xs md:text-sm" onClick={handleBackBtn}>
                    Kembali
                  </button>
                  <button className="btn btn-primary text-xs md:text-sm" onClick={handleChangeStatus}>
                    Ubah Status
                  </button>
                </div>
              </div>
            )}
          </div>
        </AdminMenu>
        <ModalConfirm
          title="Yakin mau mengubah status program register ini?"
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

export default AuthenticatedRoute(DetailRegister, { role: ROLE.ADMIN });

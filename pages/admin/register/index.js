import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { CgTrash, CgSearch } from 'react-icons/cg';
import AuthenticatedRoute from '../../../components/AuthenticatedRoute';
import AdminMenu from '../../../components/AdminMenu';
import ModalConfirm from '../../../components/ModalConfirm';
import { ProgramRegisterRepo } from '../../../repositories';
import toastRun from '../../../utils/toastRun';
import datatableStyle from '../../../utils/datatableStyle';
import { ROLE } from '../../../constants';

function ProgramRegister() {
  const router = useRouter();
  const [dataTable, setDataTable] = useState({
    data: [],
    loading: false,
    totalRows: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const fetchData = async (pageNumber, perPageNumber) => {
    setDataTable({ loading: true });
    const result = await ProgramRegisterRepo.getProgramRegister({
      page: pageNumber,
      limit: perPageNumber
    });
    setDataTable({
      data: result.data,
      loading: false,
      totalRows: result.total
    });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePerRowsChange = (newPerPage) => {
    setPerPage(newPerPage);
  };

  useEffect(() => {
    fetchData(page, perPage);
  }, [page, perPage]);

  const handleDelete = (row) => {
    setSelectedData(row);
    setIsShowModal(true);
  };

  const handleDetail = (row) => {
    router.push('/admin/register/' + row.id);
  };

  const onConfirmDelete = async () => {
    if (selectedData && selectedData.id) {
      setIsLoading(true);
      const response = await ProgramRegisterRepo.deleteProgramRegister(selectedData.id);
      if (response?.status) {
        fetchData(page, perPage);
        toastRun.success(`Pendaftar ${selectedData?.name} berhasil dihapus`);
      } else {
        toastRun.error(response.message || 'API Error');
      }
      setIsLoading(false);
      setIsShowModal(false);
    } else {
      toastRun.error('ID pendaftar tidak ditemukan');
    }
  };

  const columns = [
    {
      name: 'Nama',
      selector: (row) => row.name,
      grow: 1
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      grow: 1
    },
    {
      name: 'Nama Program',
      cell: (row) => row.program_name
    },
    {
      name: 'Tipe Program',
      selector: (row) => row.program_type
    },
    {
      name: 'Status',
      selector: (row) => {
        switch (row.status) {
          case 'registered':
            return <div className="badge badge-info">{row.status}</div>;
          case 'pending':
            return <div className="badge badge-warning">{row.status}</div>;
          case 'paid':
            return <div className="badge badge-success">{row.status}</div>;
          case 'expired':
            return <div className="badge badge-error">{row.status}</div>;
          default:
            return <div className="badge">{row.status}</div>;
        }
      }
    },
    {
      name: 'Action',
      button: true,
      grow: 1,
      cell: (row) => (
        <div className="flex content-center gap-1 my-1.5">
          <button className="btn btn-primary min-h-8 h-8 px-3" onClick={() => handleDetail(row)}>
            <CgSearch className="text-xl" />
          </button>
          <button className="btn btn-error min-h-8 h-8 px-3" onClick={() => handleDelete(row)}>
            <CgTrash className="text-xl" />
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <Head>
        <title>Admin | Pendaftar Program</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AdminMenu>
          <div className="container px-20 py-16 mb-8 bg-primary-content rounded-lg shadow-lg">
            <div className="flex justify-between mb-10">
              <p className="text-primary font-bold text-3xl">Pendaftar Program</p>
            </div>
            <DataTable
              columns={columns}
              data={dataTable.data}
              customStyles={datatableStyle}
              progressPending={dataTable.loading}
              highlightOnHover
              pagination
              paginationServer
              paginationTotalRows={dataTable.totalRows}
              onChangePage={handlePageChange}
              onChangeRowsPerPage={handlePerRowsChange}
            />
          </div>
        </AdminMenu>
        <ModalConfirm
          title={`Yakin mau menghapus pendaftar "${selectedData?.name}"?`}
          description=""
          isShow={isShowModal}
          isLoading={isLoading}
          onConfirm={onConfirmDelete}
          onCancel={() => setIsShowModal(false)}
        ></ModalConfirm>
      </main>
    </div>
  );
}

export default AuthenticatedRoute(ProgramRegister, { role: ROLE.ADMIN });

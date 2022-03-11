import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DayJs from 'dayjs';
import { CgTrash } from 'react-icons/cg';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import ModalConfirm from '../../../../components/ModalConfirm';
import { ProgramClassRepo, ProgramRepo } from '../../../../repositories';
import toastRun from '../../../../utils/toastRun';

function Admin() {
  const [dataTable, setDataTable] = useState({
    data: [],
    loading: false,
    totalRows: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState({ name: '' });

  const fetchUsers = async (page) => {
    setDataTable({ loading: true });
    const result = await ProgramClassRepo.getProgramClass({
      page: page,
      limit: 10
    });
    setDataTable({
      data: result.data,
      loading: false,
      totalRows: result.total
    });
  };

  const handlePageChange = (page) => {
    fetchUsers(page);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const handleDelete = (row) => {
    setSelectedProgram(row);
    setIsShowModal(true);
  };

  const onConfirmDelete = async () => {
    if (selectedProgram && selectedProgram.program_id) {
      setIsLoading(true);
      const response = await ProgramRepo.deleteProgram(selectedProgram.program_id);
      if (response?.status) {
        fetchUsers(1);
        toastRun.success('Program berhasil dihapus');
      } else {
        toastRun.error(response.message || 'API Error');
      }
      setIsLoading(false);
      setIsShowModal(false);
    } else {
      toastRun.error('ID program tidak ditemukan');
    }
  };

  const customStyles = {
    headRow: {
      style: {
        border: 'none'
      }
    },
    headCells: {
      style: {
        fontSize: '14px',
        fontWeight: 500
      }
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: 'rgb(230, 244, 244)',
        borderBottomColor: '#FFFFFF',
        outline: '1px solid #FFFFFF'
      }
    },
    pagination: {
      style: {
        border: 'none'
      }
    }
  };

  const columns = [
    {
      name: 'Nama',
      sortable: true,
      style: {
        fontSize: '14px',
        color: '#005365'
      },
      grow: 2,
      cell: (row) => <Link href={'/admin/program/class/' + row.id}>{row.name}</Link>
    },
    {
      name: 'Deskripsi',
      selector: (row) => row.description,
      grow: 1
    },
    {
      name: 'Slug',
      selector: (row) => row.slug
    },
    {
      name: 'Harga',
      sortable: true,
      selector: (row) => row.price
    },
    {
      name: 'Tanggal Penutupan',
      selector: (row) => (row.closed_at ? DayJs(row.closed_at).format('DD MMM YYYY HH:mm A') : ''),
      grow: 2
    },
    {
      name: 'Action',
      button: true,
      width: '80px',
      cell: (row) => (
        <div className="flex content-center my-1.5">
          <button className="btn btn-error min-h-8 h-8 px-3" onClick={() => handleDelete(row)}>
            <CgTrash className="text-xl" />
          </button>
        </div>
      )
    }
  ];

  const router = useRouter();
  const handleCreateClass = () => router.push('/admin/program/class/create');

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
            <div className="flex justify-between">
              <p className="text-primary font-bold text-3xl">Program Kelas</p>
              <button onClick={handleCreateClass} className="btn btn-primary">
                Buat Kelas
              </button>
            </div>
            <DataTable
              columns={columns}
              data={dataTable.data}
              customStyles={customStyles}
              progressPending={dataTable.loading}
              highlightOnHover
              pagination
              paginationServer
              paginationTotalRows={dataTable.totalRows}
              onChangePage={handlePageChange}
            />
          </div>
        </AdminMenu>
        <ModalConfirm
          title={`Yakin mau menghapus program kelas "${selectedProgram.name}"?`}
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

export default AuthenticatedRoute(Admin, { role: 'admin' });

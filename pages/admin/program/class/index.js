import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DayJs from 'dayjs';
import { CgTrash, CgSearch } from 'react-icons/cg';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import ModalConfirm from '../../../../components/ModalConfirm';
import { ProgramClassRepo, ProgramRepo } from '../../../../repositories';
import toastRun from '../../../../utils/toastRun';
import { formatCurrency } from '../../../../utils/helper';

function Admin() {
  const router = useRouter();
  const [dataTable, setDataTable] = useState({
    data: [],
    loading: false,
    totalRows: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState({ name: '' });
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const fetchData = async (pageNumber, perPageNumber) => {
    setDataTable({ loading: true });
    const result = await ProgramClassRepo.getProgramClass({
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
    setSelectedProgram(row);
    setIsShowModal(true);
  };

  const handleDetail = (row) => {
    router.push('/admin/program/class/' + row.id);
  };

  const onConfirmDelete = async () => {
    if (selectedProgram && selectedProgram.program_id) {
      setIsLoading(true);
      const response = await ProgramRepo.deleteProgram(selectedProgram.program_id);
      if (response?.status) {
        fetchData(page, perPage);
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
      grow: 1,
      cell: (row) => row.name
    },
    {
      name: 'Slug',
      selector: (row) => row.slug
    },
    {
      name: 'Harga',
      sortable: true,
      selector: (row) => formatCurrency(row.price)
    },
    {
      name: 'Tanggal Penutupan',
      selector: (row) => (row.closed_at ? DayJs(row.closed_at).format('DD MMM YYYY HH:mm A') : '')
    },
    {
      name: 'Action',
      button: true,
      width: '80px',
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

  const handleCreateClass = () => router.push('/admin/program/class/create');

  return (
    <div>
      <Head>
        <title>Admin | Program Kelas</title>
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
              onChangeRowsPerPage={handlePerRowsChange}
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

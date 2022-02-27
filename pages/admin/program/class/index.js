import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import TableAction from '../../../../components/TableAction';
import { programRepository } from '../../../../repositories';
import { ToastContainer } from 'react-toastify';

function Admin() {
  const [dataTable, setDataTable] = useState({
    data: [],
    loading: false,
    totalRows: 0
  });

  const fetchUsers = async (page) => {
    setDataTable({loading: true});
    const result = await programRepository.getProgramClass({
      page: page,
      limit: 10
    });
    setDataTable({
      data: result.data,
      loading: false,
      totalRows: result.total,
    });
  };

  const handlePageChange = (page) => {
    fetchUsers(page);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const customStyles = {
    	headRow: {
    		style: {
    			border: 'none',
      	},
    	},
    	headCells: {
    		style: {
    			fontSize: '14px',
          fontWeight: 500,
    		},
    	},
    	rows: {
    		highlightOnHoverStyle: {
    			backgroundColor: 'rgb(230, 244, 244)',
    			borderBottomColor: '#FFFFFF',
    			outline: '1px solid #FFFFFF',
    		},
    	},
    	pagination: {
    		style: {
    			border: 'none',
    		},
    	},
    };

  const columns = [
    {
        name: 'Nama',
        sortable: true,
        style: {
          fontSize: '14px',
    			color: '#005365',
        },
        grow: 2,
        cell: (row) => <a href={"/admin/program/class/" + row.id}>{row.name}</a>
    },
    {
        name: 'Deskripsi',
        selector: row => row.description,
        grow: 2,
    },
    {
      name: 'Slug',
      selector: row => row.slug,
    },
    {
      name: 'Harga',
      sortable: true,
      selector: row => row.price,
    },
    {
      name: 'Tanggal Penutupan',
      selector: row => row.closed_at,
    },
    {
      name: 'Action',
      button: true,
      width: '80px',
      cell: (row) => <TableAction row={row} />
    },
  ];

  const router = useRouter();
  const handleCreateClass = () => router.push("/admin/program/class/create");

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
                    <button
                        onClick={handleCreateClass}
                        className="btn btn-primary"
                    >
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
                <ToastContainer className="mt-16 text-xs"/>
            </div>
        </AdminMenu>
    </main>
    </div>
  );
}

export default AuthenticatedRoute(Admin, { role: 'admin' });
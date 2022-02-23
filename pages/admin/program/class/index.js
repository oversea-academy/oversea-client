import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';
import TableAction from '../../../../components/TableAction';
import { programRepository } from '../../../../repositories';

function Admin() {
  
  // TEMPORARY DATA (HARDCODED)
  const data = [
    {
        id: 1,
        name: "Kelas IELTS",
        description: "Seru banget karena native speakernya asik",
        slug: "kelas-ielts",
        price: "10000",
        closed_at: "23 Feb"
    },
    {
        id: 2,
        name: "Kelas TOEFL",
        description: "Asik sekali karena gurunya lucu",
        slug: "kelas-toefl",
        price: "8000",
        closed_at: "15 Jan"
    },
    {
      id: 3,
      name: "Kelas IELTS",
      description: "Seru banget karena native speakernya asik",
      slug: "kelas-ielts",
      price: "10000",
      closed_at: "23 Feb"
    },
    {
        id: 4,
        name: "Kelas TOEFL",
        description: "Asik sekali karena gurunya lucu",
        slug: "kelas-toefl",
        price: "8000",
        closed_at: "15 Jan"
    },
    {
      id: 5,
      name: "Kelas IELTS",
      description: "Seru banget karena native speakernya asik",
      slug: "kelas-ielts",
      price: "10000",
      closed_at: "23 Feb"
    },
    {
        id: 6,
        name: "Kelas TOEFL",
        description: "Asik sekali karena gurunya lucu",
        slug: "kelas-toefl",
        price: "8000",
        closed_at: "15 Jan"
    },
    {
      id: 7,
      name: "Kelas IELTS",
      description: "Seru banget karena native speakernya asik",
      slug: "kelas-ielts",
      price: "10000",
      closed_at: "23 Feb"
    },
    {
        id: 8,
        name: "Kelas TOEFL",
        description: "Asik sekali karena gurunya lucu",
        slug: "kelas-toefl",
        price: "8000",
        closed_at: "15 Jan"
    },
    {
      id: 9,
      name: "Kelas IELTS",
      description: "Seru banget karena native speakernya asik",
      slug: "kelas-ielts",
      price: "10000",
      closed_at: "23 Feb"
    },
    {
        id: 10,
        name: "Kelas TOEFL",
        description: "Asik sekali karena gurunya lucu",
        slug: "kelas-toefl",
        price: "8000",
        closed_at: "15 Jan"
    },
    {
      id: 11,
      name: "Kelas IELTS",
      description: "Seru banget karena native speakernya asik",
      slug: "kelas-ielts",
      price: "10000",
      closed_at: "23 Feb"
    },
    {
        id: 12,
        name: "Kelas TOEFL",
        description: "Asik sekali karena gurunya lucu",
        slug: "kelas-toefl",
        price: "8000",
        closed_at: "15 Jan"
    },
    {
      id: 13,
      name: "Kelas IELTS",
      description: "Seru banget karena native speakernya asik",
      slug: "kelas-ielts",
      price: "10000",
      closed_at: "23 Feb"
    },
  ];

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
        selector: row => row.name,
        sortable: true,
        style: {
          fontSize: '14px',
    			color: '#005365',
        },
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
                  data={data}
                  customStyles={customStyles}
                  highlightOnHover
                  pagination
                />
            </div>
        </AdminMenu>
    </main>
    </div>
  );
}

export default AuthenticatedRoute(Admin, { role: 'admin' });
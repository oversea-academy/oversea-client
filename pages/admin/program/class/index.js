import Head from 'next/head';
import { useRouter } from 'next/router';
import DataTable from 'react-data-table-component';
import AuthenticatedRoute from '../../../../components/AuthenticatedRoute';
import AdminMenu from '../../../../components/AdminMenu';

function Admin() {
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
            </div>
        </AdminMenu>
    </main>
    </div>
  );
}

export default AuthenticatedRoute(Admin, { role: 'admin' });
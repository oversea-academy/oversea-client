import Head from 'next/head';
import AuthenticatedRoute from '../../components/AuthenticatedRoute';
import AdminMenu from '../../components/AdminMenu';
import { ROLE } from '../../constants';

function Admin() {
  return (
    <div>
      <Head>
        <title>Admin | Dashboard</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AdminMenu>
          <h1>Main</h1>
        </AdminMenu>
      </main>
    </div>
  );
}

export default AuthenticatedRoute(Admin, { role: ROLE.ADMIN });

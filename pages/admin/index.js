import Head from 'next/head';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Admin() {
  const userProfile = useSelector((state) => state.userProfile);
  const router = useRouter();

  useEffect(() => {
    const roles = userProfile.roles ? userProfile.roles : [];
    if (!roles.some((item) => item == 'admin')) {
      router.push('/');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Oversea Academy | Admin</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-2 lg:mb-3 text-primary font-bold">Admin</p>
                <h1 className="mb-9 text-2xl md:text-3xl lg:text-4xl font-bold max-w-md">Coming Soon</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

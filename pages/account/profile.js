import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthenticatedRoute from '../../components/AuthenticatedRoute';

function Profile() {
  const userProfile = useSelector((state) => state.userProfile);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Oversea Academy - Profile</title>
        <meta name="description" content="Oversea Academy - Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-8/12 py-10">
                {userProfile.email ? (
                  <div className="card shadow">
                    <div className="card-body">
                      <h2 className="card-title">My Profile</h2>
                      <div className="flex flex-col gap-3">
                        <div className="flex">
                          <div className="w-24">Nama</div>
                          <div>{`${userProfile.first_name} ${userProfile.last_name}`}</div>
                        </div>
                        <div className="flex">
                          <div className="w-24">Email</div>
                          <div>{userProfile.email}</div>
                        </div>
                        <div className="flex">
                          <div className="w-24">Nomor HP</div>
                          <div>{userProfile.phone_number}</div>
                        </div>
                        <div className="flex">
                          <div className="w-24">Role</div>
                          <div>{userProfile.roles.join(' ')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AuthenticatedRoute(Profile, { pathAfterFailure: '/account/signin' });

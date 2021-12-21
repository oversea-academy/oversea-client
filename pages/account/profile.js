import Head from 'next/head';
import React, { useState } from 'react';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);

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
              <div className="w-full md:w-9/12 lg:w-8/12 py-10"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

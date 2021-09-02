import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ServiceItem from '../components/service-item';
import React, { useState } from 'react';

export default function Home() {
  const [layanan, setLayanan] = useState([
    {
      id: 1,
      title: 'Bimbingan beasiswa',
      content: 'Abc derfj ksksks kksks',
      source: '/illustrations/1.png'
    },
    {
      id: 2,
      title: 'Bimbingan belajar IELTS dan TOEFL',
      content: 'Abc derfj ksksks kksks',
      source: '/illustrations/2.png'
    },
    {
      id: 3,
      title: 'Lancar berbicara bahasa inggris',
      content: 'Abc derfj ksksks kksks',
      source: '/illustrations/3.png'
    },
    {
      id: 4,
      title: 'Webinar gratis persiapan studi lanjut dan beasiswa',
      content: 'Abc derfj ksksks kksks',
      source: '/illustrations/4.png'
    },
    {
      id: 5,
      title: 'Simulasi IELTS dan TOEFL ITP',
      content: 'Abc derfj ksksks kksks',
      source: '/illustrations/5.png'
    },
    {
      id: 6,
      title: 'Bimbingan belajar SAT dan TPA',
      content: 'Abc derfj ksksks kksks',
      source: '/illustrations/6.png'
    }
  ]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Oversea Academy</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="home">
          <div className="hero w-full h-screen bg-primary bg-opacity-5">
            <div className="w-full flex-col hero-content lg:flex-row-reverse justify-around">
              <div className="max-w-md">
                <Image
                  src="/human.jpg"
                  alt="photo"
                  width={600}
                  height={600}
                  className="rounded-tl-3xl rounded-br-3xl"
                />
              </div>
              <div className="max-w-md">
                <p className="mb-3 text-primary font-bold">Oversea Academy</p>
                <h1 className="mb-9 text-3xl lg:text-7xl font-bold">Growing Globally with Us!</h1>
                <p className="mb-5">Let&#39;s prepare your oversea study and career</p>
              </div>
            </div>
          </div>
        </section>

        <section id="layanan">
          <div className="w-full">
            <div className="w-full flex justify-center p-3">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-3 text-primary font-bold">Layanan Kami</p>
                <h1 className="mb-9 text-3xl lg:text-4xl font-bold max-w-md">Persiapkan studi lanjutmu bersama kami</h1>
                <div className="flex flex-col gap-6">
                  {layanan.map(({ id, title, content, source }) => (
                    <ServiceItem title={title} content={content} key={id} source={source} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimoni">
          <div className="w-full bg-primary bg-opacity-5">
            <div className="w-full flex justify-center p-3">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-3 text-primary font-bold">Testimoni</p>
                <h1 className="mb-9 text-3xl lg:text-4xl font-bold">Apa kata mereka tentang kami?</h1>
              </div>
            </div>
          </div>
        </section>

        <section id="mitra">
          <div className="w-full">
            <div className="w-full flex justify-center p-3">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-3 text-primary font-bold">Mitra</p>
                <h1 className="mb-9 text-3xl lg:text-4xl font-bold">Dipercaya oleh berbagai mitra</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

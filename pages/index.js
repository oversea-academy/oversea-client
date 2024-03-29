import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import CardOffer from '../components/CardOffer';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import ClassOptions from '../components/ClassOptions';
import CardClassInfo from '../components/CardClassInfo';
import { ProgramClassRepo } from '../repositories';

export default function Home() {
  const [classType, setClassType] = useState('');
  const [classList, setClassList] = useState({
    loading: true,
    data: []
  });
  const router = useRouter();

  useEffect(async () => {
    setClassList({
      loading: true,
      data: []
    });
    const result = await ProgramClassRepo.getProgramClass({
      type: classType,
      is_published: 1
    });
    if (result.status) {
      setClassList({
        loading: false,
        data: result.data
      });
    }
  }, [classType]);

  const handleClickClass = (slug) => {
    router.push(`/class/${slug}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Oversea Academy</title>
        <meta name="description" content="Oversea Academy" />
        <meta name="facebook-domain-verification" content="b757k0aoii2enbq1g9jzj8w5vuk15w" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="home">
          <div className="hero min-h-screen bg-welcome-img relative">
            <div className="w-full hero-content justify-start mb-32">
              <div className="max-w-lg ">
                <p className="mb-12 text-primary font-bold">Oversea Academy</p>
                <div className="text-3xl md:text-4xl lg:text-5xl text-primary pb-5">
                  All-in-one Oversea Study Preparation
                </div>
                <div className="text-primary pb-5">Let's prepare your oversea study and career</div>
                <a href="#class">
                  <div className="w-48">
                    <Button title="Cari Kelas" isDisabled={false} />
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute -bottom-80 md:-bottom-72 lg:-bottom-24 xl:-bottom-12">
              <CardOffer />
            </div>
          </div>
        </section>

        <section id="class" className="mt-72 md:mt-64 lg:mt-24">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-10/12 lg:w-8/12 pt-16 pb-8 md:py-16 flex flex-col items-center">
              <div className="text-primary font-semibold text-2xl md:text-4xl">Pilihan Kelas</div>
              <div className="border-b-4 w-20 p-2 border-accent mb-10"></div>
              <div className="mb-10">
                <ClassOptions handleValue={(type) => setClassType(type)}></ClassOptions>
              </div>
              <div className="flex flex-wrap gap-10 justify-center w-full">
                {classList.data.map(({ id, slug, name, description, price, image }) => (
                  <CardClassInfo
                    key={id}
                    name={name}
                    description={description}
                    price={price}
                    image={image}
                    onClick={(e) => handleClickClass(slug)}
                  ></CardClassInfo>
                ))}
                {classList.loading && <p className="text-primary italic">Loading...</p>}
                {!classList.loading && classList.data.length === 0 && (
                  <p className="text-primary italic">Tidak ada pilihan kelas</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <Subscribe />
        <Footer />
      </main>
    </div>
  );
}

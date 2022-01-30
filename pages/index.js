import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';
import CardOffer from '../components/CardOffer';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import ClassOptions from '../components/ClassOptions';
import CardClassInfo from '../components/CardClassInfo';
import { programRepository } from '../repositories';

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
    const result = await programRepository.getProgramClass({
      type: classType
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

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const dd = [
    { value: 0, label: 'Tanggal' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' }
  ];
  const mm = [
    { value: 0, label: 'Bulan' },
    { value: 1, label: 'Januari' },
    { value: 2, label: 'Februari' },
    { value: 3, label: 'Maret' }
  ];
  const yy = [
    { value: 0, label: 'Tahun' },
    { value: 1, label: '1999' },
    { value: 2, label: '2000' },
    { value: 3, label: '2001' }
  ];
  var btnOnCLick = (e) => {
    e.preventDefault();
    if (day == 0 || month == 0 || year == 0) {
      alert(`ada yang kosong`);
    } else {
      alert(`value: ${day}-${month}-${year}`);
    }
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
                {/* <Image src="/Logo.png" alt="logo" width={200} height={100} objectFit="contain" /> */}
                <p className="mb-12 text-primary font-bold">Oversea Academy</p>
                <div className="text-5xl text-primary pb-5">All-in-one Oversea Study Preparation</div>
                <div className="text-primary pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
                <a href="#class">
                  <div className="w-48">
                    <Button title="Cari Kelas" isDisabled={false} />
                  </div>
                </a>
              </div>
            </div>
            <div className="absolute -bottom-64 lg:-bottom-12">
              <CardOffer />
            </div>
          </div>
        </section>

        <section id="class" className="mt-64 lg:mt-24">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-10/12 lg:w-8/12 py-16 flex flex-col items-center">
              <div className="text-primary font-semibold text-4xl">Pilihan Kelas</div>
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

        {/* <section>
          <form className="flex flex-col">
            <div className="inline-flex">
              <Dropdown data={dd} selected={(d) => setDay(d)} />
              <Dropdown data={mm} selected={(m) => setMonth(m)} />
              <Dropdown data={yy} selected={(y) => setYear(y)} />
            </div>
            <button
              onClick={btnOnCLick}
              className="
              py-2 px-6 w-1/2 rounded-full text-base text-primary-content font-medium
              bg-gradient-to-r from-primary to-accent
              hover:from-secondary hover:to-accent
              transition transform hover:scale-105
              motion-reduce:transition-none motion-reduce:transform-none"
            >
              submit
            </button>
          </form>
        </section> */}

        {/* <section>
          <form>
            <TextInput placeholder="ini testing" value={tesInput} onChange={(e) => setTes(e.target.value)}/>
            <button
              onClick={btnOnCLick}
              className="
              py-2 px-6 w-1/2 rounded-full text-base text-primary-content font-medium
              bg-gradient-to-r from-primary to-accent
              hover:from-secondary hover:to-accent
              transition transform hover:scale-105
              motion-reduce:transition-none motion-reduce:transform-none"
            >
              submit
            </button>
          </form>
        </section> */}

        <Subscribe />
        <Footer />
      </main>
    </div>
  );
}

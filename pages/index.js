import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Button from '../components/Button';
import CardOffer from '../components/CardOffer';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import ClassOptions from '../components/ClassOptions';
import CardClassInfo from '../components/CardClassInfo';
import CardCalendarAndPrice from '../components/CardCalendarAndPrice';
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
                {classList.data.map(({ id, slug, name, description, price }) => (
                  <CardClassInfo
                    key={id}
                    name={name}
                    description={description}
                    price={price}
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

        <Footer />
        {/* Test CardCalendarAndPrice */}
        {/* <section>
          <CardCalendarAndPrice></CardCalendarAndPrice>
        </section> */}
        {/* Test end CardCalendarAndPrice */}

        <section id="about">
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <div className="mb-2 lg:mb-3 border-b border-base-300">
                  <Image alt="Oversea Academy" src="/Logo.png" width={160} height={64} />
                </div>
                <div className="flex flex-col md:flex-row gap-10 lg:gap-20 px-5 font-medium">
                  <div className="flex flex-col">
                    <div className="hover:text-primary">
                      <a href="#">Tentang Kami</a>
                    </div>
                    <div className="hover:text-primary">
                      <a href="https://blog.oversea.academy" target="_blank" rel="noreferrer">
                        Blog
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      <div>Kontak Kami</div>
                      <div className="flex flex-row gap-2">
                        <div className="w-6 h-6 relative">
                          <Image alt="Icon" src="/icons/whatsapp.png" layout="fill" objectFit="contain" />
                        </div>
                        <div className="font-normal hover:text-primary hover:underline">
                          <a href="https://wa.me/6281234567890?text=Halo%20minsea" target="_blank" rel="noreferrer">
                            0812-3456-7890
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="w-6 h-6 relative">
                          <Image alt="Icon" src="/icons/email.png" layout="fill" objectFit="contain" />
                        </div>
                        <div className="font-normal hover:text-primary hover:underline">
                          <a href="mailto:info@oversea.academy">info@oversea.academy</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>Ikuti Kami</div>
                      <div className="flex flex-row gap-2">
                        <div className="w-6 h-6 relative">
                          <Image alt="Icon" src="/icons/youtube.png" layout="fill" objectFit="contain" />
                        </div>
                        <div className="font-normal hover:text-primary hover:underline">
                          <a
                            href="https://www.youtube.com/channel/UCg3ZClA_TiqNZ0xv-iRnvqA"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Oversea Academy
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="w-6 h-6 relative">
                          <Image alt="Icon" src="/icons/instagram.png" layout="fill" objectFit="contain" />
                        </div>
                        <div className="font-normal hover:text-primary hover:underline">
                          <a href="https://www.instagram.com/oversea.academy/" target="_blank" rel="noreferrer">
                            @oversea.academy
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

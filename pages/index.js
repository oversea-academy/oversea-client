import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ServiceItem from '../components/ServiceItem';
import TestimoniCard from '../components/TestimoniCard';
import Button from '../components/Button';
import CardOffer from '../components/CardOffer';
import React, { useState } from 'react';

export default function Home() {
  const [layanan, setLayanan] = useState([
    {
      id: 1,
      title: 'Bimbingan beasiswa',
      content:
        'Temukan tutor persiapan study overseas kamu. Oversea Academy siap membantumu mempersiapkan persyaratan dokumen dan interview.',
      source: '/illustrations/1.png'
    },
    {
      id: 2,
      title: 'Bimbingan belajar IELTS dan TOEFL',
      content: 'Raih target skor IELTS dan TOEFL dengan bantuan tutor-tutor berpengalaman di Oversea Academy.',
      source: '/illustrations/2.png'
    },
    {
      id: 3,
      title: 'Lancar berbicara bahasa inggris',
      content: 'Lebih pede dan lancar berbahasa inggris bersama tutor-tutor berpengalaman di Oversea Academy.',
      source: '/illustrations/3.png'
    },
    {
      id: 4,
      title: 'Webinar persiapan studi lanjut dan beasiswa',
      content:
        'Siapkan berbagai tips dan trick persipan studi lanjut dan beasiswa melalui webinar gratis di Oversea Academy.',
      source: '/illustrations/4.png'
    },
    {
      id: 5,
      title: 'Simulasi IELTS dan TOEFL ITP',
      content: 'Oversea Academy siap membantumu memprediksi sejauh mana kemampuanmu dalam tes IELTS dan TOEFL ITP.',
      source: '/illustrations/5.png'
    },
    {
      id: 6,
      title: 'Bimbingan belajar SAT dan TPA',
      content: 'Raih target skor SAT dan TPA dengan bantuan tutor-tutor berpengalaman di Oversea Academy.',
      source: '/illustrations/6.png'
    }
  ]);

  const partners = [
    {
      id: 1,
      source: '/images/partners/bmka.png',
      description: 'BMKA Salman ITB'
    },
    {
      id: 2,
      source: '/images/partners/ras.png',
      description: 'Rumah Amal Salman ITB'
    }
  ];

  var btnOnCLick = (e) => {
    e.preventDefault();
    alert('Button Clicked');
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
                <div className="w-48">
                  <Button title="Cari Kelas" isDisabled={false} onClick={btnOnCLick} />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12">
              <CardOffer />
            </div>
          </div>
        </section>

        <section id="class" className="mt-24">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-9/12 lg:w-6/12 py-16 flex flex-col items-center">
              <div className="text-primary text-3xl">Pilihan Kelas</div>
              <div className="border-b-4 w-20 p-2 border-accent"></div>
            </div>
          </div>
        </section>

        <section id="layanan">
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-2 lg:mb-3 text-primary font-bold">Layanan Kami</p>
                <h1 className="mb-9 text-2xl md:text-3xl lg:text-4xl font-bold max-w-md">
                  Persiapkan studi lanjutmu bersama kami
                </h1>
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
          <div className="w-full bg-primary bg-opacity-10">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-2 lg:mb-3 text-primary font-bold">Testimoni</p>
                <h1 className="mb-9 text-2xl md:text-3xl lg:text-4xl font-bold">Apa kata mereka tentang kami?</h1>
                <TestimoniCard />
              </div>
            </div>
          </div>
        </section>

        <section id="kemitraan">
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-2 lg:mb-3 text-primary font-bold">Kemitraan</p>
                <h1 className="mb-9 text-2xl md:text-3xl lg:text-4xl font-bold">Dipercaya oleh berbagai mitra</h1>
                <div className="flex flex-wrap gap-3">
                  {partners.map(({ id, source, description }) => (
                    <div key={id} className="w-16 h-16 lg:w-24 lg:h-24 relative">
                      <Image src={source} alt={description} layout="fill" objectFit="contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                      <a href="#">Blog</a>
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

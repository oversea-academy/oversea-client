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
          <div className="hero w-full bg-primary bg-opacity-10">
            <div className="lg:hidden w-full h-full bg-bottom bg-no-repeat bg-contain opacity-20 bg-welcome-img"></div>
            <div className="w-full h-full lg:my-16 hero-content items-start lg:items-center lg:flex-row-reverse lg:justify-around">
              <div className="max-w-md hidden lg:block opacity-60">
                <Image src="/images/map.png" alt="map" width={500} height={300} objectFit="contain" />
              </div>
              <div className="max-w-md mt-12 lg:mt-0">
                <p className="mb-2 lg:mb-3 text-primary font-bold">Oversea Academy</p>
                <h1 className="mb-5 lg:mb-9 text-3xl md:text-5xl lg:text-6xl font-bold">Growing Globally with Us!</h1>
                <p className="mb-5">Let&#39;s prepare your oversea study and career</p>
              </div>
            </div>
          </div>
        </section>

        <Button title="Enable" isDisabled={false} onClick={btnOnCLick} />
        <div className="mt-2 w-1/2">
          <Button title="Disable" isDisabled={true} onClick={btnOnCLick} />
        </div>
        <CardOffer />

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

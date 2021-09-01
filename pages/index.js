import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ServiceItem from '../components/service-item';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oversea Academy</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="home">
          <div className="hero w-full h-screen bg-accent bg-opacity-5">
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
                <p className="mb-5 text-accent font-bold">Oversea Academy</p>
                <h1 className="mb-9 text-3xl lg:text-7xl font-bold">Growing Globally with Us!</h1>
                <p className="mb-5">Let&#39;s prepare your oversea study and career</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="w-full">
            <div className="w-full flex justify-center p-3">
              <div className="w-full md:w-9/12 lg:w-6/12 py-16">
                <p className="mb-5 text-accent font-bold">Layanan Kami</p>
                <h1 className="mb-9 text-3xl lg:text-4xl font-bold max-w-md">Persiapkan studi lanjutmu bersama kami</h1>
                <div className="flex flex-col gap-6">
                  <ServiceItem title="Bimbingan Beasiswa" content="Helloooooo" />
                  <ServiceItem title="Bimbingan TOEFL" content="Helloooooo" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

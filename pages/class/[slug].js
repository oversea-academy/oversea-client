import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { ProgramClassRepo } from '../../repositories';
import CardCalendarAndPrice from '../../components/CardCalendarAndPrice';
import CardClassInfo from '../../components/CardClassInfo';
import Footer from '../../components/Footer';

export default function Class() {
  const router = useRouter();
  const { slug } = router.query;

  const [dataKelas, setDataKelas] = useState({
    loading: true,
    data: []
  });

  const [classType, setClassType] = useState('');
  const [classList, setClassList] = useState({
    loading: true,
    data: []
  });

  useEffect(async () => {
    setDataKelas({
      loading: true,
      data: []
    });

    if (slug !== undefined) {
      const result = await ProgramClassRepo.getProgramClassBySlug(slug);
      if (result.status) {
        const data = result.data;
        setDataKelas({
          loading: false,
          data: data
        });
        setClassType(data.class_type);
      }
    }
  }, [slug]);

  useEffect(async () => {
    setClassList({
      loading: true,
      data: []
    });
    const result = await ProgramClassRepo.getProgramClass({
      limit: 3,
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

  const handleClickRegister = (id) => {
    router.push(`/register/${id}`);
  };

  return (
    <div>
      <Head>
        <title>Oversea Academy | Class</title>
        <meta name="description" content="Oversea Academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="cover">
          <div className="hero min-h-20 md:min-h-screen bg-class-img relative ">
            <div className="w-full hero-content justify-start mt-12 md:mt-0 md:mb-32">
              <div className="max-w-sm md:max-w-lg ">
                <div className="text-xl md:text-2xl text-primary pb-3 md:pb-5">
                  {!dataKelas.loading ? dataKelas.data.program_type : ''}
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl text-primary pb-5">
                  {(!dataKelas.loading && dataKelas.data.name) ||
                    (dataKelas.loading && <p className="text-primary italic text-xl">Loading...</p>)}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="class">
          {!dataKelas.loading && (
            <div className="flex flex-col w-full  justify-evenly  content-center -mt-10 md:flex-row lg:mx-auto">
              <div className="w-full pl-4 mt-14 lg:w-2/5">
                <div className="text-red-oringe  italic my-6 tracking-wider text-lg md:text-xl">
                  <div className="flex justify-start font-normal">
                    <p className="pr-4">
                      Total Jam Belajar
                      <br />
                      Total Pertemuan
                    </p>
                    <p>
                      : {dataKelas.data.total_hour} Jam
                      <br />: {dataKelas.data.total_meet} kali
                    </p>
                  </div>
                </div>
                <div className="text-primary tracking-wider">
                  <h2 className="mt-6 mb-4 text-2xl md:text-3xl">Tujuan Pembelajaran</h2>
                  <p className="my-4 text-base lg:text-lg">{dataKelas.data.learning_goal}</p>
                </div>
                <div className="text-primary tracking-wider">
                  <h2 className="mt-6 mb-0 text-2xl md:text-3xl">Materi dan Fasilitas yang Didapatkan</h2>
                  <div className="py-6 card bordered">
                    {/* loop of facilities */}
                    {dataKelas.data.facilities.map((data) => (
                      <div key={data} className="form-control py-1 content-center  ">
                        <label className="flex justify-start tracking-wider">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="self-center checkbox checkbox-primary checked cursor-default"
                          />
                          <span className="label-primary px-4 text-base lg:text-lg">{data}</span>
                        </label>
                      </div>
                    ))}
                    {/* End loop of facilities */}
                  </div>
                </div>
              </div>
              <div className="w-full z-10 md:w-3/5 lg:w-2/5">
                <CardCalendarAndPrice
                  scheduleDay={dataKelas.data.schedule_day}
                  scheduleTime={dataKelas.data.schedule_time}
                  price={dataKelas.data.price}
                  priceNormal={dataKelas.data.price_normal}
                  closedAt={dataKelas.data.closed_at}
                  onClick={(e) => handleClickRegister(dataKelas.data.id)}
                ></CardCalendarAndPrice>
              </div>
            </div>
          )}
        </section>
        <section id="KelasTerkait">
          <div className="w-full md:pl-32 mb-20">
            <div className="text-primary flex flex-col items-center md:items-start mt-10 mb-6">
              <div className="text-2xl md:text-3xl">Kelas Terkait</div>
              <div className="border-b-4 w-20 p-2 border-accent"></div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center lg:justify-start w-full">
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
        </section>
        {!dataKelas.loading && <Footer />}
      </main>
    </div>
  );
}

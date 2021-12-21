import Image from 'next/image';
import React, { useState } from 'react';

export default function TestimoniCard() {
  const [num, setNum] = useState(0);
  const [testimoni, setTestimoni] = useState([
    {
      id: 1,
      name: `Noor Naila Imtinan Himam`,
      description: `Siswa Bimbingan Beasiswa`,
      message: `Joining Oversea academy for my scholarship preparation was totally a great decision. Although I have 
      limited preparation time, Oversea academy was able to provide me with amazing tutors that gives powerful practices 
      and consultation as well as significant tips and tricks. Moreover, I was amazed by the time flexibility I receive 
      for tutoring sessions. As a result, I could pass every stage of the scholarship selection process confidently. 
      Gratefully, I receive the scholarship to continue my study in my dream university.`,
      achievement: `Lolos Beasiswa Prestasi Talenta ke University of British Columbia`,
      image: `/images/testimoni/testimoni_1.jpg`
    },
    {
      id: 2,
      name: `dr. Emir Amaro`,
      description: `Dokter Umum, Student Private TOEFL IBT`,
      message: `Saya berkesempatan untuk belajar dari tutor oversea dalam rangka persiapan ujian TOEFL IBT saya. Selama persiapan 
      tersebut, saya sangat terbantu dengan latihan dan simulasi yang diberikan. Referensi dan materi yang diberikan juga 
      sangat lengkap, mulai dari mengenal anatomi tes TOEFL, tipe pertanyaan, hingga tips dan trik yang krusial dalam 
      menjawab soal. Tutor oversea juga sangat friendly, hingga setiap sesi latihan tidak terasa membosankan.
      Dengan latihan dan feedback yang diberikan, saya merasa percaya diri dalam menghadapi hari ujian. Saya pun akhirnya 
      berhasil mencapai skor TOEFL yang saya targetkan. Terima kasih.`,
      achievement: `TOEFL IBT sebelum 80, TOEFL IBT setelah 105`,
      image: `/images/testimoni/testimoni_2.jpg`
    },
    {
      id: 3,
      name: `Ahmad Alfarobi J.I.`,
      description: `Siswa Bimbingan Beasiswa dan Wawancara`,
      message: `Bimbingan di overseas jadwalnya bisa menyesuaikan dan di berikan tutor yg tidak hanya 1 sehingga bisa memberikan 
      berbagai sudut pandang. Selain itu tutor-tutornya memiliki pengalaman yang sesuai dengan apa yg ingin kita dapatkan sehingga 
      mengetahui pasti mekanisme dan cara-cara mencapat tujuan tersebut.`,
      achievement: `Lolos Beasiswa LPDP 2021 ke Wageningen University & Research, Belanda`,
      image: `/images/testimoni/testimoni_3.jpg`
    },
    {
      id: 4,
      name: `Sarah Zhafirah`,
      description: `Student of IELTS Program`,
      message: `I really enjoyed all of the lessons with Oversea Academy,and thanks to the tutors, my English improved
      significantly. I need to work more on reading and listening due to my lack of focus but the tutor has helped
      me alot, the personal feed back on speaking is very helpful and the tutor gave me useful tricks on writing.
      Thank you!`,
      achievement: `Lolos Beasiswa LPDP 2021 ke Wageningen University & Research, Belanda`,
      image: `/human.jpg`
    }
  ]);

  function prevButton() {
    if (num == 0) {
      setNum(testimoni.length - 1);
    } else {
      setNum(num - 1);
    }
  }

  function nextButton() {
    if (num == testimoni.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  }

  return (
    <div className="w-full relative">
      <button className="absolute top-36 left-0 lg:left-1 z-20 btn btn-circle lg:btn-lg" onClick={prevButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
          ></path>
        </svg>
      </button>
      <div className="mx-5 lg:mx-10 h-96 bg-neutral-content card shadow-xl px-5 lg:px-10 py-5 flex flex-col md:flex-row gap-4 items-center">
        <div className="w-72 h-72 relative hidden md:block">
          <Image src={testimoni[num].image} alt="photo" layout="fill" objectFit="cover" className="rounded-xl" />
        </div>
        <div className="max-w-xs w-full text-center px-3">
          <svg
            className="mx-auto my-2 lg:my-4"
            width="42"
            height="33"
            viewBox="0 0 42 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.76575 -5.72205e-06C12.4538 -5.72205e-06 14.6618 0.863995 16.3898 2.592C18.1178 4.256 18.9818 6.464 18.9818 9.216C18.9818 10.496 18.8218 11.776 18.5018 13.056C18.1818 14.336 17.5098 16.256 16.4858 18.816L10.9178 32.64H1.41375L5.54175 17.472C3.94175 16.768 2.69375 15.712 1.79775 14.304C0.90175 12.896 0.45375 11.2 0.45375 9.216C0.45375 6.464 1.31775 4.256 3.04575 2.592C4.83775 0.863995 7.07775 -5.72205e-06 9.76575 -5.72205e-06ZM32.4218 -5.72205e-06C35.1098 -5.72205e-06 37.3178 0.863995 39.0458 2.592C40.7738 4.256 41.6378 6.464 41.6378 9.216C41.6378 10.496 41.4778 11.776 41.1578 13.056C40.8378 14.336 40.1658 16.256 39.1418 18.816L33.5738 32.64H24.0698L28.1978 17.472C26.5978 16.768 25.3498 15.712 24.4538 14.304C23.5578 12.896 23.1098 11.2 23.1098 9.216C23.1098 6.464 23.9738 4.256 25.7018 2.592C27.4938 0.863995 29.7338 -5.72205e-06 32.4218 -5.72205e-06Z"
              fill="#01818E"
            />
          </svg>
          <div className="text-xs pb-3">{testimoni[num].message}</div>
          <div className="text-sm font-medium text-primary">{testimoni[num].name}</div>
          <div className="text-xs">{testimoni[num].description}</div>
          <div className="text-xs italic">{testimoni[num].achievement}</div>
        </div>
      </div>
      <button
        className="absolute top-36 right-0 lg:right-1 z-20 btn btn-primary btn-circle lg:btn-lg"
        onClick={nextButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

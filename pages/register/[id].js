import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { programRepository } from '../../repositories';
import TextInput from '../../components/TextInput';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';
import { formatCurrency } from '../../utils/helper';

export default function Register() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [program, setProgram] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: ''
  });

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

  const handleForm = (name, value) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const handleCheckout = () => {
    console.log(form);
  };

  useEffect(async () => {
    if (id) {
      const response = await programRepository.getProgramClassById(id);
      setIsLoading(false);
      if (response.status) {
        setProgram(response.data);
      }
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>Oversea Academy | Register Oversea Program</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="register">
          <div className="hero min-h-screen bg-class-img relative ">
            <div
              className="
              w-full md:w-3/4 bg-base-100 rounded-3xl 
              border-none shadow-lg absolute -bottom-96 md:-bottom-64
              px-4 md:px-8 py-12
            "
            >
              {isLoading ? (
                <div className="text-center">Loading...</div>
              ) : (
                <div className="h-full flex flex-col md:flex-row justify-between">
                  <div className="flex-grow">
                    <div className="text-xl text-primary font-bold mb-8">Isian Data Pribadi</div>
                    <div className="form-group">
                      <span className="text-primary">Nama Lengkap</span>
                      <TextInput
                        placeholder="Nama Kamu"
                        value={form.name}
                        onChange={(e) => handleForm('name', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="text-primary">Email</span>
                      <TextInput
                        placeholder="nama@gmail.com"
                        value={form.email}
                        onChange={(e) => handleForm('email', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="text-primary">No Whatsapp Aktif</span>
                      <TextInput
                        placeholder="+628XXXXXXXXXX"
                        value={form.whatsapp}
                        onChange={(e) => handleForm('whatsapp', e.target.value)}
                      />
                    </div>
                    <div className="form-group flex flex-col">
                      <span className="text-primary">Tanggal Lahir</span>
                      {/* <TextInput placeholder="Input" value={input} onChange={(e) => setInput(e.target.value)}/> */}
                      <div className="inline-flex gap-2">
                        <Dropdown data={dd} selected={(d) => setDay(d)} />
                        <Dropdown data={mm} selected={(m) => setMonth(m)} />
                        <Dropdown data={yy} selected={(y) => setYear(y)} />
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="text-primary">Kota Domisili</span>
                      <TextInput
                        placeholder="Nama kota"
                        value={form.domisili}
                        onChange={(e) => handleForm('domisili', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="text-primary">Institusi</span>
                      <TextInput
                        placeholder="Nama institusi"
                        value={form.institusi}
                        onChange={(e) => handleForm('institusi', e.target.value)}
                      />
                    </div>
                  </div>
                  <div
                    className="
                    flex-none w-full md:w-px md:h-full 
                    border-t-2 md:border-t-0 md:border-l-2 
                    border-primary 
                    my-12 md:my-0 md:mx-12
                  "
                  ></div>
                  <div className="flex-grow">
                    <div className="text-xl text-primary font-bold mb-8">Pilihan Kelas</div>
                    <div className="w-full border-b-2 border-primary"></div>
                    <div className="flex justify-between text-primary text-lg my-6">
                      <div>{program ? program.name : ''}</div>
                      <div>{program ? formatCurrency(program.price, 'IDR') : ''}</div>
                    </div>
                    <div className="w-full border-b-2 border-primary"></div>
                    <div className="flex justify-between text-primary text-lg font-bold mt-6">
                      <div>Total</div>
                      <div>{program ? formatCurrency(program.price, 'IDR') : ''}</div>
                    </div>
                    <div className="mt-6 flex justify-center md:justify-start">
                      <div className="w-40">
                        <Button title="Checkout" onClick={handleCheckout} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

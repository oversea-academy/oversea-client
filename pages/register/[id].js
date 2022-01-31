import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import TextInput from '../../components/TextInput';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const handleForm = (name, value) => {
    setForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

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
              w-3/4 h-full bg-base-100 rounded-3xl 
              border-none shadow-lg absolute -bottom-64
              px-8 py-12 flex flex-row justify-between
            "
            >
              <div className="flex-grow">
                <div className="text-xl text-primary font-bold mb-8">Isian Data Pribadi</div>
                <div className="form-group">
                  <span className="text-primary">Nama Lengkap</span>
                  <TextInput
                    placeholder="Input"
                    value={form.name}
                    onChange={(e) => handleForm('name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <span className="text-primary">Email</span>
                  <TextInput
                    placeholder="Input"
                    value={form.email}
                    onChange={(e) => handleForm('email', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <span className="text-primary">No Whatsapp Aktif</span>
                  <TextInput
                    placeholder="Input"
                    value={form.whatsapp}
                    onChange={(e) => handleForm('whatsapp', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <span className="text-primary">Tanggal Lahir</span>
                  {/* <TextInput placeholder="Input" value={input} onChange={(e) => setInput(e.target.value)}/> */}
                </div>
                <div className="form-group">
                  <span className="text-primary">Kota Domisili</span>
                  <TextInput
                    placeholder="Input"
                    value={form.domisili}
                    onChange={(e) => handleForm('domisili', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <span className="text-primary">Institusi</span>
                  <TextInput
                    placeholder="Input"
                    value={form.institusi}
                    onChange={(e) => handleForm('institusi', e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-none h-full w-px border-l-2 border-primary mx-12"></div>
              <div className="flex-grow">
                <div className="text-xl text-primary font-bold mb-8">Pilihan Kelas</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

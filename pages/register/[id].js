import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { programRepository } from '../../repositories';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { formatCurrency, validateWhatsappNumber, validateEmail, replaceWhatsappNumber } from '../../utils/helper';

export default function Register() {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [program, setProgram] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [responseData, setResponseData] = useState({});

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

  const handleCheckout = async () => {
    if (
      form.name &&
      form.email &&
      form.whatsapp &&
      form.birth_date &&
      form.city &&
      form.institution &&
      validateWhatsappNumber(form.whatsapp) &&
      validateEmail(form.email) &&
      program.program_id
    ) {
      setIsValid(true);
      setIsButtonLoading(true);
      const response = await programRepository.postProgramRegister({
        program_id: program.program_id,
        amount: program.price,
        ...form,
        whatsapp: replaceWhatsappNumber(form.whatsapp)
      });
      if (response.status) {
        setIsButtonLoading(false);
        setShowModalSuccess(true);
        setResponseData(response.data);
      } else {
        alert('Failed');
      }
    } else {
      setIsValid(false);
    }
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

  useEffect(() => {
    if (program?.closed_at) {
      const dateClosed = new Date(program.closed_at);
      const dateNow = new Date();
      if (dateNow > dateClosed) {
        setIsDisabled(true);
      }
    } else {
      setIsDisabled(false);
    }
  }, [program]);

  return (
    <div>
      <Head>
        <title>Oversea Academy | Register Oversea Program</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="register">
          <div className="hero min-h-screen bg-class-img relative">
            {isLoading ? (
              <div className="text-left">Loading...</div>
            ) : (
              <div
                className="
                  w-full md:w-3/4 bg-base-100 rounded-3xl 
                  border-none shadow-lg absolute -bottom-96 md:-bottom-64
                  px-4 md:px-8 py-12
                "
              >
                <div className="h-full flex flex-col md:flex-row justify-between">
                  <div className="flex-grow">
                    <div className="text-xl text-primary font-bold mb-8">Isian Data Pribadi</div>
                    <div className="form-group">
                      <span className="text-primary">Nama Lengkap</span>
                      <TextInput
                        placeholder="Nama Kamu"
                        value={form.name}
                        type="text"
                        onChange={(e) => handleForm('name', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="text-primary">Email</span>
                      <TextInput
                        placeholder="nama@gmail.com"
                        value={form.email}
                        type="email"
                        onChange={(e) => handleForm('email', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="text-primary">No Whatsapp Aktif</span>
                      <TextInput
                        placeholder="08XXXXXXXXXX"
                        value={form.whatsapp}
                        type="tel"
                        onChange={(e) => handleForm('whatsapp', e.target.value)}
                      />
                    </div>
                    <div className="form-group flex flex-col">
                      <span className="text-primary">Tanggal Lahir</span>
                      <TextInput
                        placeholder="Tanggal Lahir"
                        value={form.birth_date}
                        type="date"
                        onChange={(e) => handleForm('birth_date', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="text-primary">Kota Domisili</span>
                      <TextInput
                        placeholder="Nama kota"
                        value={form.city}
                        type="text"
                        onChange={(e) => handleForm('city', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <span className="text-primary">Institusi</span>
                      <TextInput
                        placeholder="Nama institusi"
                        value={form.institution}
                        type="text"
                        onChange={(e) => handleForm('institution', e.target.value)}
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
                    <div className="mt-6 flex flex-col justify-center md:justify-start">
                      <div className="w-40">
                        {isButtonLoading ? (
                          <Button title="Loading..." isDisabled={true} />
                        ) : (
                          <Button title="Checkout" isDisabled={isDisabled} onClick={handleCheckout} />
                        )}
                      </div>
                      {isDisabled && (
                        <span className="text-sm text-error font-semibold">Masa pendaftaran kelas berakhir</span>
                      )}
                      {!isValid && <span className="text-error text-sm font-semibold">Form tidak valid</span>}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <div className={`modal ${showModalSuccess ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            🎉Terimakasih telah melakukan pendaftaran pada {program ? program.name : ''}
          </h3>
          {responseData.invoice_url && <p className="py-4">Silakan lanjut ke pembayaran</p>}
          {responseData.invoice_url && (
            <div className="modal-action">
              <a href={responseData.invoice_url} target="_blank" className="btn btn-primary" rel="noreferrer">
                Pembayaran
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

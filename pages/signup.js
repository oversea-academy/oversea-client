import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { EventEmitter } from '../utils/events';
import GoogleLoginButton from '../components/GoogleLogin';
import Alert from '../components/Alert';
import { accountRepository } from '../repositories';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [alertType, setAlertType] = useState('info');
  const [alertText, setAlertText] = useState('');

  function clickSignIn() {
    EventEmitter.dispatch('showLogIn', true);
  }

  async function register(e) {
    e.preventDefault();
    setAlertShow(false);
    if (!firstName || !lastName || !email || !password || !phoneNumber) {
      handleShowAlert('warning', 'Please fill the form');
      return;
    }
    setIsLoading(true);
    const response = await accountRepository.registerAccount({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone_number: phoneNumber
    });
    if (response?.status) {
      handleShowAlert('success', 'User registered, please confirm your email');
      setIsLoading(false);
    } else {
      handleShowAlert('warning', response.message);
      setIsLoading(false);
    }
  }

  function handleShowAlert(type, text) {
    setAlertShow(true);
    setAlertType(type);
    setAlertText(text);
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>Oversea Academy - Sign Up</title>
        <meta name="description" content="Oversea Academy - Sign Up" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-8/12 py-16">
                <h1 className="mb-9 text-lg md:text-xl lg:text-2xl font-bold">Selamat Datang di Oversea Academy</h1>
                <div className="flex flex-col-reverse md:flex-row gap-5">
                  <div className="border rounded-2xl">
                    <div className="w-full p-5 text-center rounded-t-2xl bg-softblue font-bold border-b">
                      Kamu sudah punya akun?&nbsp;
                      <span className="text-primary cursor-pointer" onClick={clickSignIn}>
                        Masuk!
                      </span>
                    </div>
                    <div className="p-5 md:p-10">
                      <div className="flex flex-col w-full">
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-5">
                            <GoogleLoginButton />
                          </div>
                        </div>
                        <div className="divider">OR</div>
                        <form className="flex flex-col gap-3">
                          <div className="flex flex-col md:flex-row gap-3">
                            <input
                              required
                              type="text"
                              placeholder="Nama Depan"
                              className="input input-bordered"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                              required
                              type="text"
                              placeholder="Nama Belakang"
                              className="input input-bordered"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                          <input
                            required
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input
                            required
                            type="password"
                            placeholder="Password"
                            className="input input-bordered"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <input
                            required
                            type="number"
                            placeholder="Nomor HP"
                            className="input input-bordered"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                          <Alert isShow={alertShow} type={alertType} text={alertText} />
                          <button
                            type="submit"
                            className={`btn btn-primary ${isLoading && 'loading'}`}
                            onClick={register}
                          >
                            Sign Up
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:relative w-full">
                    <Image src="/images/signup.png" alt="sign up" layout="fill" objectFit="contain" />
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

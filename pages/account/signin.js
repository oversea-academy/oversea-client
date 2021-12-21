import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import GoogleLoginButton from '../../components/GoogleLogin';
import { accountRepository } from '../../repositories';

export default function ModalLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function clickRegister() {
    setIsActive(false);
  }

  async function signIn(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    const response = await accountRepository.postLogin({
      email: email,
      password: password
    });
    if (response?.status) {
      window.localStorage.setItem('AUTH', '1');
      window.location.replace('/');
    } else {
      setIsLoading(false);
      alert(response.message);
    }
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>Oversea Academy - Sign In</title>
        <meta name="description" content="Oversea Academy - Sign In" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-8/12 py-10">
                <h1 className="mb-3 text-md text-center md:text-xl lg:text-2xl font-bold">
                  Selamat Datang di Oversea Academy
                </h1>
                <div className="p-5">
                  <div className="max-w-md m-auto py-3">
                    <div className="flex flex-col w-full">
                      <div className="flex flex-col gap-3">
                        <div className="font-bold">Masuk dengan</div>
                        <div className="flex gap-5">
                          <GoogleLoginButton />
                        </div>
                      </div>
                      <div className="divider">OR</div>
                      <form className="flex flex-col gap-3">
                        <input
                          type="email"
                          placeholder="Email"
                          className="input input-bordered"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="input input-bordered"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className={`btn btn-primary ${isLoading && 'loading'}`} onClick={signIn}>
                          Masuk
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="text-center font-bold">
                    Belum punya akun?&nbsp;
                    <span className="text-primary" onClick={clickRegister}>
                      <Link href="/account/signup" passHref>
                        Daftar sekarang!
                      </Link>
                    </span>
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

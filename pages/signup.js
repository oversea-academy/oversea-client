import Head from 'next/head';
import Image from 'next/image';
import { EventEmitter } from '../utils/events';
import { FcGoogle } from 'react-icons/fc';

export default function SignUp() {
  function clickSignIn() {
    EventEmitter.dispatch('showLogIn', true);
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
                            <button className="btn btn-outline flex-grow flex gap-1 capitalize">
                              <FcGoogle className="text-xl" />
                              <span>Google</span>
                            </button>
                          </div>
                        </div>
                        <div className="divider">OR</div>
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col md:flex-row gap-3">
                            <input type="text" placeholder="Nama Depan" className="input input-bordered" />
                            <input type="text" placeholder="Nama Belakang" className="input input-bordered" />
                          </div>
                          <input type="text" placeholder="Email" className="input input-bordered" />
                          <input type="password" placeholder="Password" className="input input-bordered" />
                          <input type="text" placeholder="Nomor HP" className="input input-bordered" />
                          <button className="btn btn-primary">Sign Up</button>
                        </div>
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

import React, { useState } from 'react';
import Link from 'next/link';
import { EventEmitter } from '../../utils/events';
import GoogleLoginButton from '../google-login';
import { mainRepository } from '../../repositories';

export default function ModalLogin() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  EventEmitter.subscribe('showLogIn', (data) => {
    setIsActive(data);
  });

  function closeModal(e) {
    const elementModal = document.getElementById('modal-login');
    if (e.target.contains(elementModal)) {
      setIsActive(false);
    }
  }

  function clickRegister() {
    setIsActive(false);
  }

  function signIn(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    mainRepository
      .postLogin({
        email: email,
        password: password
      })
      .then((data) => {
        if (data.status) {
          window.location.reload();
          setIsActive(false);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div onClick={closeModal} id="modal-login" className={`modal ${isActive ? 'modal-open' : ''}`}>
      <div className="modal-box p-0 max-w-lg">
        <div className="w-full p-5 text-center rounded-t-2xl font-bold bg-softblue">
          Belum punya akun?&nbsp;
          <span className="text-primary" onClick={clickRegister}>
            <Link href="/signup" passHref>
              Daftar sekarang!
            </Link>
          </span>
        </div>
        <div className="max-w-md m-auto py-10">
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
      </div>
    </div>
  );
}

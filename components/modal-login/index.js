import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EventEmitter } from '../../utils/events';
import GoogleLoginButton from '../google-login';

export default function ModalLogin() {
  const [isActive, setIsActive] = useState(false);

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
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Email" className="input input-bordered" />
              <input type="password" placeholder="Password" className="input input-bordered" />
              <button className="btn btn-primary">Masuk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

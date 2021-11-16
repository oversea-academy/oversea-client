import React, { useState, useEffect } from 'react';
import { EventEmitter } from '../../utils/events';

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

  return (
    <div onClick={closeModal} id="modal-login" className={`modal ${isActive ? 'modal-open' : ''}`}>
      <div className="modal-box p-0 max-w-lg">
        <div className="w-full p-5 text-center rounded-t-2xl">Belum punya akun? Daftar sekarang!</div>
        <div className="max-w-md m-auto py-10">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-3">
              <div className="font-bold">Masuk dengan</div>
              <div className="flex gap-5">
                <button className="btn btn-outline flex-grow">Facebook</button>
                <button className="btn btn-outline flex-grow">Google</button>
              </div>
            </div>
            <div className="divider">OR</div>
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Email" className="input input-bordered" />
              <input type="password" placeholder="Password" className="input input-bordered" />
              <button className="btn btn-info">Masuk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

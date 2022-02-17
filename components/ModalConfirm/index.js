import Image from 'next/image';
import React, { useState } from 'react';

export default function ModalConfirm({
  title = 'Yakin mau hapus kelas ini?',
  description = 'Info kelas dan pendaftar kelas akan hilang',
  onConfirm = function () {},
  onCancel = function () {},
  isLoading = false,
  isShow = true
}) {
  const [Loading, setLoading] = useState(isLoading);
  const [Show, setShow] = useState(isShow);

  return (
    <div>
      {Show && <input type="checkbox" id="my-modal-confrim" className="modal-toggle" checked />}
      {!Show && <input type="checkbox" id="my-modal-confrim" className="modal-toggle" />}
      <div className="modal ">
        <div className="modal-box text-center rounded-md max-w-2xl ">
          <div className="flex flex-col justify-center items-center text-center mb-6 ">
            <Image src="/icons/Icon_warning.png" alt="icon warning" width={200} height={200} />
          </div>
          <h3 className="font-bold text-4xl text-primary">{title}</h3>
          <p className="py-4 text-2xl text-primary">{description}</p>
          <div className="modal-action justify-center ">
            <button onClick={() => setShow(false)} className="btn btn-outline btn-error border-2 w-2/6">
              Batal
            </button>
            <button onClick={() => setLoading(true)} className={`btn btn-primary w-2/6 ${Loading && 'loading'}`}>
              {(!Loading && 'Konfirmasi') || 'loading'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

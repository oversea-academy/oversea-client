import Image from 'next/image';
import React, { useState } from 'react';

export default function ModalConfirm({
  title = 'Yakin mau hapus kelas ini?',
  description = 'Info kelas dan pendaftar kelas akan hilang',
  onConfirm = function () {
    console.log('confirm');
  },
  onCancel = function () {
    console.log('cancel');
  },
  isLoading = false,
  isShow = false
}) {
  const [Loading, setLoading] = useState(isLoading);
  const [Show, setShow] = useState(isShow);

  return (
    <div>
      {Show && <input type="checkbox" id="my-modal-confrim" className="modal-toggle" defaultChecked />}
      {!Show && <input type="checkbox" id="my-modal-confrim" className="modal-toggle" />}
      <div className="modal ">
        <div className="modal-box text-center rounded-xl max-w-sm ">
          <div className="flex flex-col justify-center items-center text-center mb-2 ">
            <Image src="/icons/Icon_warning.png" alt="icon warning" width={100} height={100} />
          </div>
          <h3 className="font-bold text-xl text-primary">{title}</h3>
          <p className="py-2 text-base text-primary">{description}</p>
          <div className="modal-action justify-center ">
            <button onClick={() => setShow(false) && onCancel()} className="btn btn-outline btn-error border-2 w-2/5">
              Batal
            </button>
            <button
              onClick={() => setLoading(true) && onConfirm()}
              className={`btn btn-primary w-2/5 ${Loading && 'loading'}`}
            >
              {(!Loading && 'Konfirmasi') || 'loading'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

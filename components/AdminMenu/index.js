import Link from 'next/link';
import { CgHome, CgTemplate, CgUserList } from 'react-icons/cg';
import React, { useState } from 'react';

export default function AdminMenu({ children }) {
  const [isProgram, setProgram] = useState(false);
  const [isPendaftaran, setPendaftaran] = useState(false);

  function clickProgram() {
    if (isProgram) {
      setProgram(false);
    } else {
      setProgram(true);
    }
  }

  function clickPendaftaran() {
    if (isPendaftaran) {
      setPendaftaran(false);
    } else {
      setPendaftaran(true);
    }
  }

  return (
    <div className="shadow bg-base-200 drawer drawer-mobile h-screen">
      <input id="admin-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12 pb-20">{children}</div>
      <div className="drawer-side">
        <label htmlFor="admin-sidebar" className="drawer-overlay"></label>
        <div className="bg-primary overflow-y-auto w-80 text-base-100">
          <div className="px-10 pt-6 pb-2">
            <p className="pb-5">MENU</p>
          </div>
          <div className="bg-dark-gray px-10 py-4 flex flex-row items-center ">
            <CgHome className="text-xl" />
            <Link href="/admin" passHref>
              <button className="ml-2 hover:text-accent">Dashboard</button>
            </Link>
          </div>
          <div className=" px-10 py-4 flex flex-row items-center">
            <CgTemplate className="text-xl" />
            <button className="ml-2 hover:text-accent" onClick={() => clickProgram()}>
              Program
            </button>
          </div>
          <div
            className={`menu bg-dark-gray  flex flex-row content-center transition duration-700 ease-in-out ${
              !isProgram && 'hidden'
            }`}
          >
            <ul className="w-80">
              <li className="px-8 py-3 w-80 hover:text-accent">
                <Link href="/admin/program/class" passHref>
                  List Program Kelas
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu px-10 py-4 flex flex-row items-center">
            <CgUserList className="text-xl" />
            <button className="ml-2 hover:text-accent" onClick={() => clickPendaftaran()}>
              Pendaftaran
            </button>
          </div>
          <div
            className={`menu bg-dark-gray  flex flex-row content-center transition duration-700 ease-in-out ${
              !isPendaftaran && 'hidden'
            }`}
          >
            <ul className="w-80">
              <li className="px-8 py-3 w-80 hover:text-accent">
                <Link href="/admin/register" passHref>
                  List Pendaftaran
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

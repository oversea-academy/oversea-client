import Link from 'next/link';
import Image from 'next/image';
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
          <div className="bg-dark-gray px-10 py-4 flex flex-row content-center ">
            <svg
              className="mt-0.5"
              width="20"
              height="20"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 0V12H36V0H20ZM20 36H36V16H20V36ZM0 36H16V24H0V36ZM0 20H16V0H0V20Z" fill="white" />
            </svg>

            <Link href="/admin" passHref>
              <button className="ml-2 hover:text-accent">Dashboard</button>
            </Link>
          </div>
          <div className=" px-10 py-4 flex flex-row content-center">
            <svg
              className="mt-0.5"
              width="23"
              height="23"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 26H8V30H22V26ZM32 36H4V14H32V36ZM32 4H30V0H26V4H10V0H6V4H4C2.93913 4 1.92172 4.42143 1.17157 5.17157C0.421427 5.92172 0 6.93913 0 8V36C0 37.0609 0.421427 38.0783 1.17157 38.8284C1.92172 39.5786 2.93913 40 4 40H32C33.0609 40 34.0783 39.5786 34.8284 38.8284C35.5786 38.0783 36 37.0609 36 36V8C36 6.93913 35.5786 5.92172 34.8284 5.17157C34.0783 4.42143 33.0609 4 32 4ZM28 18H8V22H28V18Z"
                fill="white"
              />
            </svg>

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
                  Program Kelas
                </Link>
              </li>
              <li className="px-8 py-3 w-80 hover:text-accent">
                <Link href="/admin/program/webinar" passHref>
                  Register Webinar
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu px-10 py-4 flex flex-row content-center">
            <svg
              className="mt-0.5"
              width="23"
              height="23"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 26H8V30H22V26ZM32 36H4V14H32V36ZM32 4H30V0H26V4H10V0H6V4H4C2.93913 4 1.92172 4.42143 1.17157 5.17157C0.421427 5.92172 0 6.93913 0 8V36C0 37.0609 0.421427 38.0783 1.17157 38.8284C1.92172 39.5786 2.93913 40 4 40H32C33.0609 40 34.0783 39.5786 34.8284 38.8284C35.5786 38.0783 36 37.0609 36 36V8C36 6.93913 35.5786 5.92172 34.8284 5.17157C34.0783 4.42143 33.0609 4 32 4ZM28 18H8V22H28V18Z"
                fill="white"
              />
            </svg>
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
                <Link href="/admin/register/class" passHref>
                  Program Kelas
                </Link>
              </li>
              <li className="px-8 py-3 w-80 hover:text-accent">
                <Link href="/admin/register/webinar" passHref>
                  Register Webinar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

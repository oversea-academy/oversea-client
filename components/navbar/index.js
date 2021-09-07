import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar() {
  const [isDrawer, setIsDrawer] = useState(false);
  return (
    <div className="sticky top-0 z-30">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="navbar shadow-lg bg-neutral-content text-neutral md:px-10 lg:px-20 sticky top-0 z-30">
        <div className="flex-none px-2 mx-2 hidden lg:flex">
          <Image alt="Oversea Academy" src="/Logo.png" width={160} height={64} />
        </div>
        <div className="flex-none flex lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost" onClick={() => setIsDrawer(!isDrawer)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <Link href="/#home" passHref>
              <div className="btn btn-ghost btn-sm rounded-btn capitalize">Home</div>
            </Link>
            <Link href="#layanan" passHref>
              <div className="btn btn-ghost btn-sm rounded-btn capitalize">Layanan</div>
            </Link>
            <Link href="#kemitraan" passHref>
              <div className="btn btn-ghost btn-sm rounded-btn capitalize">Kemitraan</div>
            </Link>
          </div>
        </div>
        <div className="flex-none">
          <a className="btn btn-ghost btn-sm capitalize">Masuk</a>
        </div>
        <div className="flex-none">
          <a className="btn btn-primary btn-sm px-6 capitalize">Daftar</a>
        </div>
      </div>
      {isDrawer ? (
        <div className="drawer-side absolute z-20 h-screen">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
            <li>
              <Link href="/#home" passHref>
                <div className="capitalize hover:text-primary font-medium mb-3">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/#layanan" passHref>
                <div className="capitalize hover:text-primary font-medium mb-3">Layanan</div>
              </Link>
            </li>
            <li>
              <Link href="/#kemitraan" passHref>
                <div className="capitalize hover:text-primary font-medium mb-3">Kemitraan</div>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

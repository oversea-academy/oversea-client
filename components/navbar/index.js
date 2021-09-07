import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="navbar shadow-lg bg-neutral-content text-neutral md:px-10 lg:px-20 sticky top-0 z-30">
      <div className="flex-none px-2 mx-2 hidden md:flex">
        <Image alt="Oversea Academy" src="/Logo.png" width={160} height={64} />
      </div>
      <div className="flex-none flex md:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden md:flex">
          <Link href="/" passHref>
            <div className="btn btn-ghost btn-sm rounded-btn capitalize">Home</div>
          </Link>
          <Link href="/layanan" passHref>
            <div className="btn btn-ghost btn-sm rounded-btn capitalize">Layanan Kami</div>
          </Link>
          <Link href="/kemitraan" passHref>
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
  );
}

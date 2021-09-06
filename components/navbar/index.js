import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="navbar shadow-lg bg-neutral-content text-neutral md:px-10 lg:px-20 sticky top-0 z-30">
      <div className="flex-none px-2 mx-2">
        <Image alt="Oversea Academy" src="/Logo.png" width={160} height={64} />
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <Link href="/">
            <div className="btn btn-ghost btn-sm rounded-btn capitalize">Home</div>
          </Link>
          <Link href="/layanan">
            <div className="btn btn-ghost btn-sm rounded-btn capitalize">Layanan Kami</div>
          </Link>
          <Link href="/kemitraan">
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

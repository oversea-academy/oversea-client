import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="p-10 footer bg-primary text-neutral-content w-full flex justify-center p-3">
        <div className="w-full md:w-9/12 lg:w-6/12">
          <div className="flex gap-5">
            <span className="text-xs lg:text-sm">© 2021 Oversea Academy</span>
            <span>
              <Link href="/terms-and-condition" passHref>
                Ketentuan Penggunaan
              </Link>
            </span>
            <span>
              <Link href="/privacy-policy" passHref>
                Kebijakan Privasi
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

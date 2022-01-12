import Link from 'next/link';

export default function AdminMenu({ children }) {
  return (
    <div className="shadow bg-base-200 drawer drawer-mobile h-screen">
      <input id="admin-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12">{children}</div>
      <div className="drawer-side">
        <label htmlFor="admin-sidebar" className="drawer-overlay"></label>
        <ul
          className="
          menu 
          p-4 
          overflow-y-auto 
          w-80 
          bg-primary
          text-base-100
        "
        >
          <li>
            <p className="pb-5">PROGRAM CLASS</p>
          </li>
          <li>
            <Link href="/admin/program/class/register" passHref>
              Register Class
            </Link>
          </li>
          <li>
            <Link href="/admin/program/class/list" passHref>
              List Class Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

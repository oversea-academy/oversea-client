import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import { EventEmitter } from '../../utils/events';
import { setSigned, setSignout } from '../../store/actions/userSignedAction';
import { setProfile } from '../../store/actions/userProfileAction';
import { setRoles } from '../../store/actions/userRolesAction';
import { CgProfile, CgLogOut, CgChevronDown } from 'react-icons/cg';
import { accountRepository } from '../../repositories';

export default function Navbar() {
  const [isDrawer, setIsDrawer] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userSigned = useSelector((state) => state.userSigned.value);
  const dispatch = useDispatch();
  const router = useRouter();

  function clickLogIn() {
    if (isMobile) {
      router.push('/account/signin');
    } else {
      EventEmitter.dispatch('showLogIn', true);
    }
  }
  function handleShowUserMenu() {
    setShowUserMenu(!showUserMenu);
  }

  async function getProfile() {
    const response = await accountRepository.getProfile();
    if (response?.status) {
      dispatch(setSigned());
      dispatch(setProfile(response.data));
      dispatch(setRoles(response.data.roles));
    } else {
      window.localStorage.removeItem('AUTH');
    }
  }

  function handleProfile() {
    router.push('/account/profile');
    setShowUserMenu(false);
  }

  async function handleSignout() {
    const response = await accountRepository.logout();
    if (response?.status) {
      window.localStorage.removeItem('AUTH');
      window.location.reload();
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('AUTH') && !userSigned) {
      getProfile();
    }
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="navbar shadow-lg bg-neutral-content text-neutral md:px-10 lg:px-20 sticky top-0 z-30 flex justify-between">
        <Link href="/" passHref>
          <div className="flex-none px-2 mx-2 w-24 h-12 flex relative cursor-pointer">
            <Image alt="Oversea Academy" src="/Logo.png" layout="fill" objectFit="cover" />
          </div>
        </Link>
        <div className="flex lg:hidden">
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
        <div className="hidden lg:flex flex-1 px-2 mx-2">
          <div className="items-stretch flex">
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
        {userSigned ? (
          <div className="hidden lg:flex flex-none relative">
            <div className="avatar flex items-center gap-1 cursor-pointer" onClick={handleShowUserMenu}>
              <div className="rounded-full w-10 h-10">
                <img src="http://daisyui.com/tailwind-css-component-profile-2@40w.png" alt="profile" />
              </div>
              <CgChevronDown
                className={`text-3xl transition duration-150 ease-in-out transform ${showUserMenu && 'rotate-180'}`}
              />
            </div>
            {showUserMenu && (
              <div className="card shadow-2xl bg-primary-content text-neutral absolute top-16 right-0">
                <div className="card-body p-5">
                  <div className="flex flex-col">
                    <div onClick={handleProfile} className="p-1 w-32 flex gap-2 items-center cursor-pointer">
                      <CgProfile />
                      <div>Profil</div>
                    </div>
                    <div onClick={handleSignout} className="p-1 w-32 flex gap-2 items-center cursor-pointer">
                      <CgLogOut />
                      <div>Keluar</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden lg:flex flex-none">
            <a onClick={clickLogIn} className="btn btn-ghost btn-sm capitalize">
              Masuk
            </a>
            <Link href="/account/signup" passHref>
              <div className="btn btn-primary btn-sm px-6 capitalize">Daftar</div>
            </Link>
          </div>
        )}
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
            <li>
              <div onClick={clickLogIn} className="capitalize hover:text-primary font-medium mb-3">
                Masuk
              </div>
            </li>
            <li>
              <Link href="/account/signup" passHref>
                <div className="capitalize hover:text-primary font-medium mb-3">Daftar</div>
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

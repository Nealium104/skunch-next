import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { BiMusic } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';

export default function Nav() {
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const menu = menuRef.current;

    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }

    return () => {
      if (btn) {
        btn.removeEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
      }
    };
  }, []);

    return (
      <>
      {/* Mobile Menu */}
        <div className="navbar bg-base-100 text-black">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/about/">The Band</Link></li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Shows
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                  </a>
                  <ul className="p-2 bg-base-100/75">
                    <li><Link href="/upcoming/">Upcoming</Link></li>
                    <li><Link href="/archive/">Archive</Link></li>
                  </ul>
                </li>
                <li><Link href="/merch/">Merch</Link></li>
              </ul>
            </div>
            <Link href='/' className="btn btn-ghost normal-case text-xl">Skunch Logo</Link>
          </div>
          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/about">The Band</Link></li>
              <li tabIndex={0}>
                <a>
                  Shows
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100/75">
                  <li><Link href="/upcoming">Upcoming</Link></li>
                  <li><Link href="/archive">Archive</Link></li>
                </ul>
              </li>
              <li><Link href="/merch">Merch</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a href="/api/auth/login">Login</a>
            <a className="btn bg-primary border-none">Buy our Shit</a>
          </div>
        </div>
      </>
      )
}       

// <nav className="bg-afWhite">
        //     <div className="xl:max-w-6xl mx-auto px-6">
        //         <div className="flex justify-between">
        //             <div className="flex items-center space-x-4">
        //                 {/* Logo Here */}
        //                 <div className="py-2 px-3">
        //                     <a href="#">
        //                         <BiMusic className="mx-auto"/>
        //                         <span className="font-bold">Skunch</span>
        //                     </a>
        //                 </div>

        //                 {/* Primary Div */}
        //                 <div className="hidden md:flex items-center space-x-1 ">
        //                     <Link href="/" className="py-2 px-3 hover:text-red-900">Home</Link>
        //                     <Link href="/about/" className="py-2 px-3 hover:text-red-900">About</Link>
        //                 </div>
        //             </div>

        //             {/* Secondary Div */}
        //             <div className="hidden md:flex items-center space-x-1 ">
        //                 <Link href='/archive/' className="py-2 px-3">Archive</Link>
        //                 <Link href='/merch/' className="py-2 px-3 bg-red-900 rounded hover:bg-red-800">Merch</Link> 
        //             </div>

        //                 {/* Mobile Menu Collapse Button */}
        //                 <div className="md:hidden flex items-center">
        //                     <button className="mobile-menu-button" ref={btnRef}>
        //                         <BiMenu />
        //                     </button>
        //                 </div>
        //             </div>   
        //                 {/* Mobile Menu */}
        //                 <div className="flex flex-col items-center mobile-menu hidden md:hidden" ref={menuRef}>
        //                     <Link href='/' className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Home</Link>
        //                     <Link href='/about/' className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">About</Link>
        //                     <Link href='/archive/' className="block py-2 px-4 text-sm hover:bg-gray-200 text-center">Archive</Link>
        //                     <Link href='/merch/' className="block py-2 px-4 text-sm hover:bg-gray-400 text-center">Merch</Link>
        //                 </div>
        //     </div>

        // </nav>
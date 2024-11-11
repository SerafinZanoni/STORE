/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className=" flex justify-between items-center p-4  bg-navbar-gradient-navbar ">
      <div className="flex items-center">
        <Link href="/home">
          <div className="flex items-center  ">
            <img
              src="https://www.svgrepo.com/show/535115/alien.svg"
              alt="Ecommerce Logo"
              className="rounded-full w-20 h-20  mr-2 p-1"
            />

            <h1 className="text-2xl text-gray-900 font-bold tracking-wide    ml-2">
              Alien Shop
            </h1>
          </div>
        </Link>
      </div>
      <nav className="flex items-center pr-2">
        <ul className="flex space-x-4 text-gray-800 ">
          <li>
            <Link
              className="transition duration-300 hover:font-bold text-slate-900  "
              href="/register"
            >
              Join Us
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-300 hover:font-bold text-slate-900  "
              href="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-300 hover:font-bold  text-slate-900 "
              href="/about"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              className="transition duration-300 hover:font-bold text-slate-900  "
              href="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:scale-110 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

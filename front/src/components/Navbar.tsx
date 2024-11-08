/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className=" flex justify-between items-center p-4  bg-navbar-gradient-navbar ">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center ">
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
      <nav className="flex items-center">
        <ul className="flex space-x-4 text-gray-800 ">
          <li>
            <Link
              className=" transition duration-300 hover:font-bold  "
              href="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-300 hover:font-bold "
              href="/cart"
            >
              Checkout
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-300 hover:font-bold "
              href="/dashboard"
            >
              Login | Register
            </Link>
          </li>
          <li>
            <Link
              className="transition duration-300 hover:font-bold "
              href="/about"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

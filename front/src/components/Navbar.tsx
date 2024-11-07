/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className=" flex justify-between items-center p-4 bg-gray-100  ">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/564x/f2/04/3e/f2043e8a5b3310dce68feb281576ac92.jpg"
              alt="Ecommerce Logo"
              className="rounded-full w-20 h-30 mr-2"
            />

            <h1 className="text-2xl text-gray-800 font-bold tracking-wide    ml-2">
              Next Ecommerce
            </h1>
          </div>
        </Link>
      </div>
      <nav className="flex items-center">
        <ul className="flex space-x-4 text-gray-800 ">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/checkout">Checkout</Link>
          </li>
          <li>
            <Link href="/login">Login | Register</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

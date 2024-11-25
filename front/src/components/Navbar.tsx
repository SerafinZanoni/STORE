/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IUserDataLogin } from "@/interfaces/interfaces";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IUserDataLogin | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    const storedData = Cookies.get("userData");
    if (storedData) setUserData(JSON.parse(storedData));
  }, [pathname]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
      background: "#000000",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("userData");
        setUserData(null);
        router.push("/");
      }
    });
  };

  return (
    <header className="flex justify-between items-center p-4 bg-navbar-gradient-navbar">
      <div className="flex items-center">
        <Link href="/home">
          <div className="flex items-center">
            <img
              src="https://www.svgrepo.com/show/535115/alien.svg"
              alt="Ecommerce Logo"
              className="rounded-full w-20 h-20 mr-6 ml-2 mb-2 hover:blur-sm"
            />
            <h1 className="text-2xl text-gray-900 font-bold tracking-wide ml-2">
              Alien Shop
            </h1>
          </div>
        </Link>
      </div>
      <nav className="flex pb-3 items-center pr-2">
        <ul className="flex space-x-8 text-gray-800">
          {userData ? (
            <>
              {/* Mostrar solo si la sesión está iniciada */}
              <li>
                <Link
                  className="transition duration-300 hover:font-bold text-slate-900"
                  href="/profile"
                >
                  My Profile
                </Link>
              </li>

              <li>
                <button
                  className="transition duration-300 hover:font-bold text-slate-900"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </button>
              </li>

              <li>
                <Link
                  className="transition duration-300 hover:font-bold text-slate-900"
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
            </>
          ) : (
            <>
              {/* Mostrar solo si no hay sesión */}
              <li>
                <Link
                  className="transition duration-300 hover:font-bold text-slate-900"
                  href="/register"
                >
                  Join Us
                </Link>
              </li>
              <li>
                <Link
                  className="transition duration-300 hover:font-bold text-slate-900"
                  href="/login"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

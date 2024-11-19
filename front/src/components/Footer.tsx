import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gray-100 p-4  bg-navbar-gradient-footer">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 font-semibold text-gray-800 mt-4  ">
          <Link className="hover:scale-105 " href="/about">
            About Us
          </Link>
          <Link className="hover:scale-105 " href="/register">
            Contact
          </Link>
          <Link className="hover:scale-105 " href="/faq">
            FAQ
          </Link>
        </div>
        <p className="text-gray-800 font-semibold mt-4 ">
          &copy; 2024 Next Ecommerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

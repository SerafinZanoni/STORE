import Link from "next/link";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-700">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-500 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-md text-gray-400 mt-2">
          The page you’re looking for doesn’t exist.
        </p>
        <br></br>
        <Link
          href="/"
          className="text-2xl  font-bold mt-4 bg-gray-200 text-black px-4 py-2 rounded hover:bg-black transition hover:text-white ease-in-out duration-300 ease-in-out "
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

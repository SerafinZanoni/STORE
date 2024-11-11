import Link from "next/link";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold ">Welcome to Alien Shop</h1>
        <br></br>
        <Link
          className="text-2xl font-bold mt-4 bg-gray-200 text-black px-4 py-2 rounded hover:bg-black transition hover:text-white ease-in-out duration-300 ease-in-out"
          href="/home"
        >
          Shop Now
        </Link>
      </main>
    </>
  );
};

export default LandingPage;

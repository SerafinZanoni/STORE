import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Next</h1>
        <Link
          className="text-2xl font-bold mt-4 bg-gray-200 text-black px-4 py-2 rounded"
          href="/home"
        >
          Shop Now
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;

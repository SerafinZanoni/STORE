/* eslint-disable @next/next/no-img-element */
"use client";
import { IUserDataLogin } from "@/interfaces/interfaces";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
const Profile: React.FC = () => {
  const [userData, setUserData] = useState<IUserDataLogin | null>();
  useEffect(() => {
    const storedData = Cookies.get("userData");
    if (storedData) {
      const parsedData: IUserDataLogin = JSON.parse(storedData);
      setUserData(parsedData);
      console.log(parsedData);
    }
  }, []);
  return (
    <section className="px-4 py-24 mx-auto h-screen max-w-7xl bg-black text-white">
      <div className="w-full mx-auto space-y-5 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
        <h1 className="text-4xl font-semibold text-center">My Profile</h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          Welcome back, {userData?.email}!
        </p>

        <p className="text-gray-400 text-lg leading-relaxed "></p>

        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-center">Meet Our Team</h2>
        </div>
      </div>
    </section>
  );
};

export default Profile;

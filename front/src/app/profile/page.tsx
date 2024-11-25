/* eslint-disable @next/next/no-img-element */
"use client";

import OrderList from "@/components/OrderList";
import Cookies from "js-cookie";

const Profile: React.FC = () => {
  const userData = JSON.parse(Cookies.get("userData") || "{}");

  return (
    <section className="px-4  mx-auto  max-w-7xl bg-black text-white">
      <div className="w-full mx-auto space-y-5 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 ">
        <p className="text-gray-400 text-4xl md:text-lg font-semibold ">
          Welcome back, {userData.user.name}!
        </p>

        <OrderList userToken={userData.token} />
      </div>
    </section>
  );
};

export default Profile;

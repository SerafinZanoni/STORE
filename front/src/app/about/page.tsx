/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl bg-black text-white">
      <div className="w-full mx-auto space-y-5 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
        <h1 className="text-4xl font-semibold text-center">About Us</h1>

        <p className="text-gray-400 text-lg leading-relaxed ">
          Welcome to our company! We are a team of passionate individuals
          dedicated to providing top-notch services and exceptional products.
          Our mission is to deliver the highest quality and ensure customer
          satisfaction.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Founded in 2023, our company has quickly grown to become a trusted
          name in the industry. We believe in innovation, integrity, and
          excellence. Our team works tirelessly to bring you the latest and
          greatest, and we are always here to support you every step of the way.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Thank you for being a part of our journey. We look forward to serving
          you and exceeding your expectations.
        </p>

        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-center">Meet Our Team</h2>
          <div className="flex flex-col space-y-6 mt-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
              <img
                src="https://s.rfi.fr/media/display/3c6dc572-7fa0-11ed-9325-005056bf30b7/w:1280/p:1x1/AP22352771589324.jpg"
                alt="John Doe"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-sm text-gray-400">CEO & Founder</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
              <img
                src="https://images2.minutemediacdn.com/image/upload/c_crop,w_673,h_673,x_49,y_45/c_fill,w_720,ar_1:1,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01fnv64bv98v92phxy3w.jpg"
                alt="John Doe"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-400">CTO</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
              <img
                src="https://scontent.fcor2-1.fna.fbcdn.net/v/t1.18169-9/27072945_10215433404133978_6962880173436290036_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeGkGNVZjwNfoIWQCNo4LYvrBTDWrA9hBv8FMNasD2EG_84E9VsXaqniz6MLLjxOw4w&_nc_ohc=x-nmYDmLeIYQ7kNvgHfrWTN&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&oh=00_AYDp2sgmDTfnTc1Q0pmkF5GKYyvaZmY9g_H_9aJMayIBEw&oe=67599028"
                alt="John Doe"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">Alice Johnson</h3>
              <p className="text-sm text-gray-400">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

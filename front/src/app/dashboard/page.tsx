/* eslint-disable @next/next/no-img-element */
import React from "react";

import { user } from "../../helpers/mockUser";

const UserDashboard: React.FC = () => {
  return (
    <div className="user-dashboard p-4 border border-gray-200 rounded-lg shadow-md flex flex-col items-center  ">
      <h1>Welcome, {user.name}</h1>

      <section className=" mb-4  rounded-lg shadow-md p-4  bg-gray-100  text-gray-800  ">
        <h2>Profile Information</h2>
        <div className="profile-info">
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>
          <p>Role: {user.role}</p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;

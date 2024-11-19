"use client";

import Link from "next/link";
import React, { useState } from "react";
import { register } from "@/api/authAPI";
import { ValidateRegistrationForm } from "@/helpers/registerValidate";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FormData, IRegisterErrorrs } from "@/interfaces/interfaces";

const initialState: FormData = {
  name: "",
  email: "",
  password: "",
  address: "",
  phone: "",
};

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<IRegisterErrorrs>(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de formulario
    const { valid, errors: validationErrors } =
      ValidateRegistrationForm(formData);
    setErrors(validationErrors);

    if (!valid) {
      await Swal.fire({
        icon: "error",
        title: "Validation Error",
        html: `<ul>${Object.values(validationErrors)
          .filter((msg) => msg)
          .map((msg) => `<li>${msg}</li>`)
          .join("")}</ul>`,
      });
      return;
    }

    try {
      const response = await register(formData);

      if (!response || response.error) {
        await Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: response?.error || "An unexpected error occurred.",
        });
        return;
      }

      router.push("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while registering. Please try again.",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl bg-black">
      <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
        <h1 className="text-4xl font-semibold text-center text-white">
          Join Us
        </h1>
        <form
          className="space-y-4 flex flex-col w-full"
          onSubmit={handleSubmit}
        >
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-400">
              Name
            </span>
            <input
              className="form-input bg-gray-800 rounded text-white placeholder-gray-500 w-full py-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </label>

          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-400">
              Your Email
            </span>
            <input
              className="form-input bg-gray-800 text-white rounded placeholder-gray-500 w-full py-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ex. james@bond.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </label>

          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-400">
              Address
            </span>
            <input
              className="form-input bg-gray-800 rounded text-white placeholder-gray-500 w-full py-2"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Fake Street, 123"
              required
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address}</p>
            )}
          </label>

          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-400">
              Phone Number
            </span>
            <input
              className="form-input bg-gray-800 rounded text-white placeholder-gray-500 w-full py-2"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="3333333333"
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </label>

          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-400">
              Create a password
            </span>
            <input
              className="form-input bg-gray-800 rounded text-white placeholder-gray-500 w-full py-2"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </label>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer"
          >
            Register
          </button>
        </form>
        <p className="my-8 text-xs font-medium text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white underline hover:text-gray-300"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;

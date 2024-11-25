const APIURL = process.env.NEXT_PUBLIC_API_URL;
import { IRegisterProps, IUserDataLogin } from "@/interfaces/interfaces";
import Swal from "sweetalert2";

export async function register(formData: IRegisterProps) {
  try {
    const res = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    } else {
      await Swal.fire({
        title: "Success!",
        text: "Registered successfully",
        icon: "success",
        confirmButtonText: "Ok",
        background: "#000000",
      });
      return res.json();
    }
  } catch (error) {
    console.log(error);
    await Swal.fire({
      title: "Error!",
      text: "Something went wrong",
      icon: "error",
      confirmButtonText: "Ok",
      background: "#000000",
    });
  }
}

export async function login(formData: IUserDataLogin) {
  try {
    const res = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    } else {
      await Swal.fire({
        title: "Success!",
        text: "Logged in successfully",
        icon: "success",
        confirmButtonText: "Ok",
        background: "#000000",
      });
      return res.json();
    }
  } catch (error) {
    console.log(error);
    await Swal.fire({
      title: "Error!",
      text: "Something went wrong",
      icon: "error",
      confirmButtonText: "Ok",
      background: "#000000",
    });
  }
}

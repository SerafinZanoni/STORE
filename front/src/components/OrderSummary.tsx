"use client";

import { IProduct, IUserDataLogin } from "@/interfaces/interfaces";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { createOrder } from "../api/orderAPI";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const OrderSummary: React.FC = () => {
  const pathname = usePathname();
  const [userData, setUserData] = useState<IUserDataLogin | null>(null);
  const router = useRouter();
  useEffect(() => {
    const storedData = Cookies.get("userData");
    if (storedData) {
      try {
        setUserData(JSON.parse(storedData));
      } catch (error) {
        console.error("Error parsing userData cookie:", error);
      }
    }
  }, [pathname]);

  const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

  if (cart.length === 0) {
    return null;
  }

  const totalPrice = cart.reduce(
    (acc: number, item: IProduct) => acc + item.price,
    0
  );
  const shippingCost = totalPrice > 1000 ? 0 : 50;
  const tax = (totalPrice + shippingCost) * 0.15;
  const grandTotal = totalPrice + shippingCost + tax;

  const handleCheckout = async () => {
    if (!userData?.token) {
      Swal.fire({
        icon: "error",
        title: "You must be logged in to proceed!",
        background: "#000000",
        color: "#721c24",
      });
      return;
    }

    const productsId: number[] = cart.map((item) => item.id);

    try {
      await createOrder(productsId, userData.token);

      Swal.fire({
        icon: "success",
        title: "Order placed successfully!",
        background: "#000000",
        color: "#155724",
      });

      localStorage.removeItem("cart");
      router.push("/profile");
    } catch (error) {
      console.error("Error during checkout:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to place order. Please try again later.",
        background: "#000000",
        color: "#721c24",
      });
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Order Summary
      </h2>

      <div className="mb-6">
        <h3 className="font-semibold text-lg text-gray-700 mb-2">
          Items in Cart:
        </h3>
        <ul className="divide-y divide-gray-300">
          {cart.map((item, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span className="text-gray-700">{item.name}</span>
              <span className="font-medium text-gray-800">
                ${item.price.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between mb-2 text-gray-700">
          <span>Subtotal:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2 text-gray-700">
          <span>Shipping:</span>
          <span>
            {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between mb-2 text-gray-700">
          <span>Tax (15%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold text-lg text-gray-800 mt-4 border-t border-gray-300 pt-4">
          <span>Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        className="w-full mt-6 bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;

import CartList from "@/components/CartList";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React from "react";

const Cart: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-start min-h-screen bg-black text-white">
      <div className="w-full flex flex-col mx-auto space-y-5 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 py-8">
        <h1 className="text-4xl font-semibold text-center mb-4">My Cart</h1>

        <div className="flex flex-col gap-4">
          <CartList />
        </div>

        <OrderSummary />

        <div className="flex justify-center">
          <Link
            href="/home"
            className="text-center w-1/3 font-bold mt-4 bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition ease-in-out duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;

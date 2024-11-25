"use client";

import React, { useEffect, useState } from "react";
import { IProduct } from "@/interfaces/interfaces";
import CartItem from "./CartItem";

const CartList: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]); // Estado para almacenar el carrito

  useEffect(() => {
    // Cargar datos del carrito desde localStorage después de montar el componente
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []); // Solo ejecuta el efecto al montar el componente

  return (
    <>
      <div className="flex flex-col text-center gap-4">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem product={item} key={item.id} />)
        ) : (
          <p className="text-center text-gray-500 mt-4 ">Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default CartList;

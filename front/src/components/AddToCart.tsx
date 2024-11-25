"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IProduct, IUserDataLogin } from "@/interfaces/interfaces";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";

interface AddToCartProps {
  product: IProduct;
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [userData, setUserData] = useState<IUserDataLogin | null>(null);

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

  const handleAddToCart = () => {
    if (userData) {
      const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const isProductInCart = cart.some((item) => item.id === product.id);

      if (!isProductInCart) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        Swal.fire({
          icon: "success",
          title: "Product added to cart",
          background: "#000000",
          color: "#ffffff",
          confirmButtonColor: "#1d4ed8",
        });
        router.push("/cart");
      } else {
        Swal.fire({
          icon: "info",
          title: "Product already in cart",
          background: "#000000",
        });
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      className="text-2xl font-bold mt-4 bg-gray-200 text-black px-4 py-2 rounded hover:bg-black transition hover:text-white ease-in-out duration-300 ease-in-out"
      onClick={handleAddToCart}
    >
      {userData ? "Add to Cart" : "Log in"}
    </button>
  );
};

export default AddToCart;

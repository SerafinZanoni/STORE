/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IProduct, IProductDetailProps } from "@/interfaces/interfaces";
import { getProductById } from "../../../api/productAPI";
import AddToCart from "@/components/AddToCart";

const Product: React.FC<IProductDetailProps> = async ({ params }) => {
  let product: IProduct | null = null;

  try {
    product = await getProductById(params.id);
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl font-bold">
          Failed to load product details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="p-4 rounded-lg shadow-md flex flex-col items-center w-1/2">
        <img
          src={product?.image}
          alt={product?.name || "Product Image"}
          className="mb-4 rounded-xl shadow-md hover:scale-105 ease-in-out duration-300"
        />
        <h1 className="mb-4 text-2xl font-bold">{product?.name}</h1>
        <p className="font-bold mb-4">Price: ${product?.price}</p>
        <p className="mb-4 text-gray-700">{product?.description}</p>

        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default Product;

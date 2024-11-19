/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { IProductDetailProps } from "@/interfaces/interfaces";
import { getProductById } from "../../../api/productAPI";

const ProductDetail: React.FC<IProductDetailProps> = async ({ params }) => {
  const product = await getProductById(params.id);

  return (
    <div className="flex justify-center items-center ">
      <div className=" p-4  rounded-lg shadow-md flex flex-col items-center w-1/2 ">
        <img
          src={product?.image}
          alt={product?.name}
          className="mb-4 rounded-xl shadow-md hover:scale-105  ease-in-out duration-300 "
        />
        <h1 className=" mb-4 text-2xl">{product?.name}</h1>
        <p className=" font-bold mb-4">Price: ${product?.price}</p>
        <p className=" mb-4  ">{product?.description}</p>
        <button className=" text-2xl  mt-4 bg-gray-200 text-black px-4 py-2 rounded hover:bg-black transition hover:text-white ease-in-out duration-300 ease-in-out">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

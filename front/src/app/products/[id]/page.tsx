/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { IProductDetailProps } from "@/interfaces/interfaces";
import { products } from "@/helpers/mockProducts";

const ProductDetail: React.FC<IProductDetailProps> = ({ params }) => {
  const product = products.find((product) => product.id === Number(params.id));

  return (
    <div className="flex justify-center items-center ">
      <div className=" p-4  rounded-lg shadow-md flex flex-col items-center w-1/2 ">
        <h1 className=" mb-4 text-2xl">{product?.name}</h1>
        <img
          src={product?.image}
          alt={product?.name}
          className="mb-4 rounded-lg shadow-md"
        />
        <p className=" font-bold mb-4">Price: ${product?.price}</p>
        <p className=" mb-4  ">{product?.description}</p>
        <button className=" bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { IProduct } from "@/interfaces/interfaces";

const ProductCard: React.FC<IProduct> = ({
  id,
  name,
  price,
  image,
  stock,
  description,
}) => {
  return (
    <Link href={`/products/${id}`}>
      <div
        className=" max-w-xs shadow-lg rounded shadow-lg overflow-hidden p-4 bg-white dark:bg-white dark:text-gray-800 hover:scale-105 transition duration-300 ease-in-out"
        key={name}
      >
        <h2 className=" text-lg font-bold mb-2 dark:text-gray-800 text-center text-gray-800 dark:text-gray-200  ">
          {name}
        </h2>

        <img className=" w-full h-auto   rounded-lg" src={image} alt={name} />
        <p className="text-gray-600 dark:text-gray-800  text-center ">
          {description}
        </p>
        <p className="text-gray-600 font-bold dark:text-gray-400  text-center ">
          $ {price}.00
        </p>
        <p className="text-gray-600 dark:text-gray-400  text-center ">
          Stock: {stock}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;

/* eslint-disable @next/next/no-img-element */
import { products } from "@/helpers/products";

export default function ProductCard() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center ">
      {products.map((product) => (
        <div
          className="flex flex-col gap-2 items-center product-card mb-4 p-4 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-white dark:hover:bg-gray-700"
          key={product.name}
        >
          <h2 className="text-lg font-bold mb-2 dark:text-white text-center text-gray-800 dark:text-gray-200  ">
            {product.name}
          </h2>

          <img
            className=" object-cover   w-40 h-40 rounded-lg"
            src={product.image}
            alt={product.name}
          />
          <p className="text-gray-600 dark:text-gray-400  ">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

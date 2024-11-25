/* eslint-disable @next/next/no-img-element */

import { IProduct } from "@/interfaces/interfaces";

const CartItem: React.FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description} </p>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default CartItem;

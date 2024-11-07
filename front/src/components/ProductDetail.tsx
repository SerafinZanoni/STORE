/* eslint-disable @next/next/no-img-element */

import React from "react";

interface ProductDetailProps {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  imageUrl,
  price,
  description,
}) => {
  return (
    <div className="product-detail p-4 border border-gray-200 rounded-lg shadow-md flex flex-col items-center  ">
      <h1 className="product-name text-2xl">{name}</h1>
      <img
        src="https://th.bing.com/th/id/OIP.PL9psEL4DmSkBNPiNWcYmQHaGh?rs=1&pid=ImgDetMain"
        alt={name}
        style={{ maxWidth: "100%", height: "auto" }}
        className="product-image mb-4"
      />
      <p className="product-price mb-4">Price: ${price.toFixed(2)}</p>
      <p className="product-description mb-4  ">{description}</p>
      <button className="add-to-cart-button bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;

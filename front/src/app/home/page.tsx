import React from "react";
import { ProductList } from "@/components/ProductList";

const HomePage: React.FC = () => {
  return (
    <div>
      <p className=" mt-4 text-lg font-semibold mb-4  text-center">
        Explore our exclusive collection and find the perfect product for you.
      </p>
      <ProductList />
    </div>
  );
};

export default HomePage;

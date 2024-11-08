import React from "react";
import { ProductList } from "@/components/ProductList";

const HomePage: React.FC = () => {
  return (
    <div>
      <main>
        <p className=" mt-4 text-lg font-semibold mb-4  text-center">
          Explore our exclusive collection and find the perfect product for you.
        </p>
        <ProductList />
      </main>
    </div>
  );
};

export default HomePage;

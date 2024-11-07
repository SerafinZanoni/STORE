import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ProductList } from "@/components/ProductList";
import ProductDetail from "@/components/ProductDetail";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <p className=" mt-4 text-lg font-semibold  text-center">
          Explore our exclusive collection and find the perfect product for you.
        </p>
        <ProductList />
        <ProductDetail
          name="Product Name"
          imageUrl="https://via.placeholder.com/150"
          price={10.99}
          description="Product description"
        />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

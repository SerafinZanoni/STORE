import { IProduct } from "@/interfaces/interfaces";
import ProductCard from "./ProductCard";
import { getProducts } from "../api/productAPI";

export const ProductList: React.FC = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <div className=" flex flex-wrap gap-4 justify-center items-center mb-4  ">
      {products.map((products: IProduct) => (
        <ProductCard
          id={products.id}
          key={products.name}
          name={products.name}
          image={products.image}
          price={products.price}
          description={products.description}
          stock={products.stock}
        />
      ))}
    </div>
  );
};

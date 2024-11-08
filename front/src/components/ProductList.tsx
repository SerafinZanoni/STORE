import ProductCard from "./ProductCard";
import { products } from "@/helpers/mockProducts";
export const ProductList: React.FC = () => {
  return (
    <div className=" flex flex-wrap gap-4 justify-center items-center mb-4  ">
      {products.map((product) => (
        <ProductCard
          id={product.id}
          key={product.name}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

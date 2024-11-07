import ProductCard from "./ProductCard";

export const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex gap-4 flex-wrap">
        <ProductCard />
      </div>
    </div>
  );
};

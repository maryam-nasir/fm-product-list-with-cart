import ProductItem from "./ProductItem";
import { PRODUCTS } from "../data";

const ProductListing = () => {
  return (
    <section className="flex flex-col flex-1">
      <h1 className="text-2xl md:text-3xl font-bold text-rose-900 mb-4">
        Desserts
      </h1>
      <div className="flex flex-wrap mt-3 justify-center md:justify-start">
        {PRODUCTS.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductListing;

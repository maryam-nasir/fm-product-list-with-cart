import { useContext } from "react";
import { type ProductType } from "../data";
import AddToCartButton from "./common/AddToCartButton";
import { CartContext } from "../context/cartContext";

type ProductItemProps = {
  product: ProductType;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const { id, name, price, category, image } = product;

  const { products, onIncrement, onDecrement } = useContext(CartContext);
  const isAdded = products.find((cartProduct) => cartProduct.id === id);
  const selectedStyles: string = "border-2 border-solid border-red";

  return (
    <div className="flex flex-col w-full min-[480px]:w-60 mb-6 mr-6">
      {/* Product Image */}
      <div className="relative flex mb-8">
        <img
          src={image.mobile}
          className={`sm:hidden w-full rounded-lg ${
            isAdded ? selectedStyles : ""
          }`}
          alt={`${name} image`}
        />
        <img
          src={image.tablet}
          className={`hidden sm:block lg:hidden w-full rounded-lg ${
            isAdded ? selectedStyles : ""
          }`}
          alt={`${name} image`}
        />
        <img
          src={image.desktop}
          className={`hidden lg:block w-full rounded-lg ${
            isAdded ? selectedStyles : ""
          }`}
          alt={`${name} image`}
        />

        <AddToCartButton
          quantity={isAdded?.quantity || 0}
          onDecrement={() => onDecrement(id)}
          onIncrement={() => onIncrement(id)}
        />
      </div>

      {/* Product Category */}
      <p className="text-sm text-rose-400 font-normal">{category}</p>

      {/* Product Name */}
      <p className="text-base text-rose-900 font-semibold py-1">{name}</p>

      {/* Product Price */}
      <p className="text-base text-red font-semibold">
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  );
};

export default ProductItem;

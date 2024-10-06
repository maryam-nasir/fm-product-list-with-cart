import { useContext } from "react";
import CartProductItem, { CartProductItemType } from "./CartProductItem";
import { CartContext } from "../context/cartContext";

import emptyCartImage from "../assets/icons/illustration-empty-cart.svg";
import carbonNeutralIcon from "../assets/icons/icon-carbon-neutral.svg";
import { PRODUCTS, type ProductType } from "../data";
import Button from "./common/Button";

const Cart = () => {
  const { products, onRemove } = useContext(CartContext);
  const totalItemsCount: number = products.reduce(
    (totalQuantity, cartProduct) => cartProduct.quantity + totalQuantity,
    0
  );

  const cartProducts: CartProductItemType[] = products.map((cartProduct) => {
    const productInfo: ProductType = PRODUCTS.find(
      (product) => product.id === cartProduct.id
    )!;

    return {
      image: productInfo.image.thumbnail,
      id: productInfo.id,
      name: productInfo.name,
      price: productInfo.price,
      quantity: cartProduct.quantity,
    };
  });

  const totalPrice: number = cartProducts.reduce(
    (acc, cartProduct) => acc + cartProduct.quantity * cartProduct.price,
    0
  );

  return (
    <div className="self-start w-full md:w-[350px] bg-white rounded-xl p-6">
      <h2 className="text-xl text-red font-bold">
        Your Cart ({totalItemsCount})
      </h2>
      {totalItemsCount === 0 ? (
        <div className="w-full flex flex-col items-center mt-10 mb-6 gap-4">
          <img src={emptyCartImage} className="w-24" />
          <p className="text-sm font-semibold text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center mt-2">
          {cartProducts.map((cartProduct) => (
            <CartProductItem
              key={cartProduct.id}
              product={cartProduct}
              onRemove={() => onRemove(cartProduct.id)}
            />
          ))}

          <div className="w-full flex h-[70px] items-center justify-between">
            <p className="text-sm text-rose-500">Order Total</p>
            <p className="text-xl text-rose-900 font-bold">
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>

          <div className="w-full flex items-center justify-center bg-rose-50 py-3 rounded-md">
            <img src={carbonNeutralIcon} />
            <p className="text-sm ml-3 text-rose-900">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <Button label="Confirm Order" onClick={() => {}} className="mt-5" />
        </div>
      )}
    </div>
  );
};

export default Cart;

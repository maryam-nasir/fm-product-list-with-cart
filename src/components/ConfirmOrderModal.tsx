import { useContext } from "react";
import Button from "./common/Button";
import ModalProductItem from "./ModalProductItem";
import { type CartProductItemType } from "./CartProductItem";
import orderConfirmedIcon from "../assets/icons/icon-order-confirmed.svg";
import { CartContext } from "../context/cartContext";
import { PRODUCTS, ProductType } from "../data";

type ConfirmOrderModalProps = {
  handleReset: () => void;
};

const ConfirmOrderModal = ({ handleReset }: ConfirmOrderModalProps) => {
  const { products, onReset } = useContext(CartContext);

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
    <div className="flex flex-col items-start">
      <img src={orderConfirmedIcon} alt="tick icon" />

      <h2 className="text-3xl font-bold text-rose-900 mt-4">Order Confirmed</h2>

      <p className="text-rose-500 mt-2">We hope you enjoy your food!</p>

      <div className="w-full flex flex-col items-center bg-rose-50 rounded-md mt-6 mb-3 px-5">
        {cartProducts.map((cartProduct) => (
          <ModalProductItem key={cartProduct.id} product={cartProduct} />
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
      </div>

      <Button
        label="Start New Order"
        onClick={() => {
          onReset();
          handleReset();
        }}
        className="mt-5"
      />
    </div>
  );
};

export default ConfirmOrderModal;

import { CartProductItemType } from "./CartProductItem";

type ModalProductItemProps = {
  product: CartProductItemType;
};

const ModalProductItem = ({ product }: ModalProductItemProps) => {
  const { name, price, quantity, image } = product;
  const totalPrice = price * quantity;

  return (
    <div className="w-full h-[80px] flex items-center justify-between text-sm border-b border-solid border-rose-100">
      <img src={image} alt={name} className="w-11 h-11 rounded" />

      <div className="flex-1 flex flex-col justify-between ml-4">
        <p className="text-rose-900 font-semibold">{name}</p>

        <div className="flex">
          <p className="text-red font-semibold mr-4">{quantity}x</p>
          <p className="text-rose-400 font-normal mr-3">
            @
            {" " +
              price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <p className="text-rose-900 font-semibold">
          {totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
};

export default ModalProductItem;

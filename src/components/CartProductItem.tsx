import RemoveIcon from "./icons/RemoveIcon";

export type CartProductItemType = {
  image: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartProductItemProps = {
  product: CartProductItemType;
  onRemove: () => void;
};

const CartProductItem = ({ product, onRemove }: CartProductItemProps) => {
  const { name, price, quantity } = product;
  const totalPrice = price * quantity;

  return (
    <div className="w-full h-[80px] flex justify-between text-sm border-b border-solid border-rose-100 py-4">
      <div className="flex-1 flex flex-col justify-between">
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
          <p className="text-rose-500 font-semibold">
            {totalPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={onRemove}
          className="w-4 h-4 rounded-full border border-solid border-rose-400 hover:border-rose-900 focus:outline-0 focus:border-rose-900 flex items-center justify-center text-rose-400 hover:text-rose-900 focus:text-rose-900"
        >
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
};

export default CartProductItem;

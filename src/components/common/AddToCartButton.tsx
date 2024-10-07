import addToCartIcon from "../../assets/icons/icon-add-to-cart.svg";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";

type AddToCartButtonProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const AddToCartButton = ({
  quantity,
  onIncrement,
  onDecrement,
}: AddToCartButtonProps) => {
  return (
    <div className="absolute flex w-full justify-center -bottom-5">
      {quantity === 0 ? (
        <button
          className="h-10 w-[160px] flex items-center justify-center bg-white text-sm text-rose-900 hover:text-red focus:outline-0 focus:text-red font-semibold rounded-full gap-2 border border-solid border-rose-400 hover:border-red focus:border-red"
          onClick={onIncrement}
        >
          <img src={addToCartIcon} alt="cart icon" />
          Add to Cart
        </button>
      ) : (
        <div className="h-10 w-[160px] flex items-center justify-between bg-red text-sm text-white font-semibold rounded-full px-3">
          <button
            onClick={onDecrement}
            className="w-4 h-4 rounded-full border-[1.5px] border-solid border-white flex items-center justify-center hover:text-red hover:bg-white focus:outline-0 focus:text-red focus:bg-white"
          >
            <MinusIcon />
          </button>

          {quantity}

          <button
            onClick={onIncrement}
            className="w-4 h-4 rounded-full border-[1.5px] border-solid border-white flex items-center justify-center hover:text-red hover:bg-white focus:outline-0 focus:text-red focus:bg-white"
          >
            <PlusIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;

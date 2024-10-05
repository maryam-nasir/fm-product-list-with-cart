import addToCartIcon from "../../assets/icons/icon-add-to-cart.svg";
import incrementIcon from "../../assets/icons/icon-increment-quantity.svg";
import decrementIcon from "../../assets/icons/icon-decrement-quantity.svg";

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
          className="h-10 w-[160px] flex items-center justify-center bg-white text-sm text-rose-900 font-semibold rounded-full gap-2 border border-solid border-rose-400"
          onClick={onIncrement}
        >
          <img src={addToCartIcon} />
          Add to Cart
        </button>
      ) : (
        <div className="h-10 w-[160px] flex items-center justify-between bg-red text-sm text-white font-semibold rounded-full px-3">
          <button
            onClick={onDecrement}
            className="w-4 h-4 rounded-full border border-solid border-white flex items-center justify-center"
          >
            <img src={decrementIcon} />
          </button>

          {quantity}

          <button
            onClick={onIncrement}
            className="w-4 h-4 rounded-full border border-solid border-white flex items-center justify-center"
          >
            <img src={incrementIcon} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;

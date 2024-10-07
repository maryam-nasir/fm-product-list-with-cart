import { createContext, useState } from "react";

type CartProductType = {
  id: string;
  quantity: number;
};

type CartType = {
  products: CartProductType[];
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onReset: () => void;
};

const INITIAL_CART_CONTEXT: CartType = {
  products: [],
  onIncrement: (id: string) => {},
  onDecrement: (id: string) => {},
  onRemove: (id: string) => {},
  onReset: () => {},
};

export const CartContext = createContext<CartType>(INITIAL_CART_CONTEXT);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  const handleIncrement = (productId: string) => {
    const updatedCartProducts: CartProductType[] = [...cartProducts];
    const index: number = updatedCartProducts.findIndex(
      (product) => product.id === productId
    );
    if (index === -1) {
      const cartProduct: CartProductType = {
        id: productId,
        quantity: 1,
      };
      updatedCartProducts.push(cartProduct);
    } else {
      updatedCartProducts[index].quantity += 1;
    }
    setCartProducts(updatedCartProducts);
  };

  const handleDecrement = (productId: string) => {
    const updatedCartProducts: CartProductType[] = [...cartProducts];
    const index: number = updatedCartProducts.findIndex(
      (product) => product.id === productId
    );
    updatedCartProducts[index].quantity -= 1;

    if (updatedCartProducts[index].quantity === 0) {
      updatedCartProducts.splice(index, 1);
    }
    setCartProducts(updatedCartProducts);
  };

  const handleRemove = (productId: string) => {
    const updatedCartProducts: CartProductType[] = [...cartProducts];
    const index: number = updatedCartProducts.findIndex(
      (product) => product.id === productId
    );

    updatedCartProducts.splice(index, 1);
    setCartProducts(updatedCartProducts);
  };

  const handleReset = () => {
    setCartProducts([]);
  };

  const cartContext: CartType = {
    products: cartProducts,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onRemove: handleRemove,
    onReset: handleReset,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;

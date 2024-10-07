import { useState } from "react";
import Cart from "./components/Cart";
import Modal from "./components/common/Modal";
import ProductListing from "./components/ProductListing";
import ConfirmOrderModal from "./components/ConfirmOrderModal";
import CartContextProvider from "./context/cartContext";

const App = () => {
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
  };

  const handleCloseModal = () => {
    setOrderConfirmed(false);
  };

  return (
    <>
      <CartContextProvider>
        <div className="flex flex-col md:flex-row">
          <ProductListing />
          <Cart onOrderConfirm={handleConfirmOrder} />
        </div>
        <Modal isOpen={orderConfirmed}>
          <ConfirmOrderModal handleReset={handleCloseModal} />
        </Modal>
      </CartContextProvider>
    </>
  );
};

export default App;

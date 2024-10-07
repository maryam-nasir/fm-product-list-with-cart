import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-end sm:items-center justify-center">
      <div className="bg-white rounded-xl sm:rounded-lg w-full sm:w-[500px] p-8 max-h-[600px] md:max-h-[700px] overflow-y-scroll">
        {children}
      </div>
    </div>,
    document.querySelector("#confirm-modal")!
  );
};

export default Modal;

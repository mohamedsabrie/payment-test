import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const ModalComponent = () => {
    if (!isOpen) return null;
    return (
      <div className="fixed w-[500px] h-[500px] bg-white shadow-2xl">
        {" "}
        <p>I Love you</p>
        <button onClick={close}>close Modal</button>
      </div>
    );
  };

  return {
    open,
    ModalComponent,
  };
};

export default useModal;

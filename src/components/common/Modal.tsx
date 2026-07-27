import type { ModalProps } from "../types/modal";
import { BsXLg } from "react-icons/bs";

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center`}
    >

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
      />

      <div className="relative z-10 w-full max-w-lg rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute left-5 top-5 rounded-md p-2 text-[var(--color-text-secondary)] transition-colors duration-200 hover:bg-gray-100 hover:text-[var(--color-text-primary)]"
        >
          <BsXLg size={18} />
        </button>

        {children}

      </div>
    </div>
  );
};

export default Modal;
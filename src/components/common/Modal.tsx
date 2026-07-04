import type { ModalProps } from "../types/modal";
import { BsXLg } from "react-icons/bs";

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
    return (
        <div className={`${isOpen ? "flex" : "hidden"}`}>

            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/30"
            ></div>

            <div className="fixed inset-0 flex items-center justify-center">
                <div className="relative w-fit rounded-lg border-2 border-gray-300 bg-gray-100 p-4 shadow-xl">
                    <BsXLg
                        onClick={onClose}
                        className="absolute right-3 top-3 cursor-pointer"
                    />

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
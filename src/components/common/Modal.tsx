import type { ModalProps } from "../types/modal";
import { BsXLg } from "react-icons/bs";
const Modal = ({ isOpen, children, onClose }: ModalProps) => {

    return (
        <div className={`${isOpen ? 'flex' : 'hidden'}`}>
            <div onClick={onClose} className={`w-[100vw] h-[100vh] bg-black/30 absolute fixed inset-0 duration-200`}></div>
            <div className={`p-4 rounded-lg bg-gray-100 w-fit absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 border-2 border-gray-300`}>
                <BsXLg onClick={onClose} className="absolute right-2 top-2 cursor-pointer" />
                {children}
            </div>
        </div>
    )
}

export default Modal
export type ModalProps = {
    isOpen:boolean;
    children:React.ReactNode;
    onClose: () => void;
    className?:string;
}
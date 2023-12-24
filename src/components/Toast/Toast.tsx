import { useToast } from "@/hooks/useToast"

const Toast = () => {
    const { isOpen, closeToast, message, title } = useToast()
    return (
        <div
            className={`bg-red-700 w-2/3 h-24 py-2 px-4 ${isOpen ? 'block' : 'hidden'} fixed ${isOpen ? 'bottom-16' : 'bottom-0'} right-0 rounded-tl-xl transition-all duration-500 ease-linear`}
            onClick={closeToast}
        >
            <div className="relative w-full h-full">
                <p className="w-full text-start font-bold text-white">{title}</p>
                <div className="w-full h-full absolute top-0 flex justify-center items-center">
                    <p className="w-full text-center text-white text-xl">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Toast
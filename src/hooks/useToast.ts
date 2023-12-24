import { toastOptions } from "@/recoil/atom"
import { useRecoilState } from "recoil"

export const useToast = () =>{
    const [toast, setToast] = useRecoilState(toastOptions)

    const openToast = () => setToast(current => ({...current, show: true}))
    const closeToast = () => setToast(current => ({...current, show: false}))

    const isOpen = toast.show
    const message = toast.message
    const title = toast.title

    return {openToast, closeToast, isOpen, message, title}
}
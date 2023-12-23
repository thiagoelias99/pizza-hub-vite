import { dialogOptions } from "@/recoil/atom"
import { ReactNode } from "react"
import { useRecoilState } from "recoil"

export const useDialog = () => {
    const [dialog, setDialog] = useRecoilState(dialogOptions)

    const content = dialog.child
    const isOpen = dialog.open

    const close = () => {
        setDialog(current => {
            return ({
                ...current,
                open: false
            })
        })
    }

    const open = () => {
        setDialog(current => {
            return ({
                ...current,
                open: true
            })
        })
    }

    const setContent = (content: ReactNode) => {
        setDialog(current => {
            return({
                ...current,
                child: content
            })
        })
    }

    return { content, isOpen, close, open, setContent }
}
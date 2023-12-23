import { useDialog } from "@/hooks/useDialog"

const DialogContainer = () => {

    const { content, isOpen, close } = useDialog()

    return (
        <>
            {isOpen && (
                <div
                    className="w-screen h-screen bg-black/70 z-50 fixed top-0 p-6"
                    onClick={close}
                >
                    <div className="flex justify-center items-center h-full w-full">
                        {content}
                    </div>
                </div>
            )}
        </>
    )
}

export default DialogContainer
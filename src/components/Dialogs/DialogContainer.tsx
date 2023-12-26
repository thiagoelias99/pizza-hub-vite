import { useDialog } from "@/hooks/useDialog"

const DialogContainer = () => {

    const { content, isOpen, close } = useDialog()

    return (
        <>
            {isOpen && (
                <>
                    <div
                        className="w-screen h-screen bg-black/70 z-40 fixed top-0"
                        onClick={close}
                    >
                    </div>
                    <div className="flex justify-center items-center w-10/12 max-h-[80%] fixed inset-x-6 top-16 p-6 mx-auto my-auto z-50 bg-white rounded overflow-y-auto border-2 border-primary">
                        {content}
                    </div>
                </>
            )}
        </>
    )
}

export default DialogContainer
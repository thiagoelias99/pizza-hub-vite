import { useFab } from "@/hooks/useFab"

const FloatingActionButton = () => {
    const { fab } = useFab()

    return (
        <button className={`w-14 h-14 bg-primary text-primary-foreground font-bold text-2xl rounded-full shadow-2xl fixed bottom-20 right-4  ${fab.visible ? 'visible' : 'invisible'}`}
            onClick={fab.onClick}
        >
            +
        </button>
    )
}

export default FloatingActionButton
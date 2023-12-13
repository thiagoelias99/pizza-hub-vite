import { useSideBarState } from '@/hooks/useSideBarState'

const SideBarOverlay = () => {
    const { sideBarStateValue, toggleSideBarState } = useSideBarState()

    return (
        <div className={`${sideBarStateValue ? 'w-full' : 'w-0'} h-full bg-black/40 fixed top-0 z-30`}
            onClick={() => toggleSideBarState(false)}
        >
        </div>
    )
}

export default SideBarOverlay
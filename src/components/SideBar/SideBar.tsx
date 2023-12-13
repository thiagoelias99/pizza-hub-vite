import { useSideBarState } from '@/hooks/useSideBarState'
import SideBarContent from "./SideBarContent/SideBarContent"
import SideBarHeader from "./SideBarHeader/SideBarHeader"
import SideBarOverlay from './SideBarOverlay/SideBarOverlay'

const SideBar = () => {
    const { sideBarStateValue } = useSideBarState()

    return (
        <div className={`${sideBarStateValue ? 'w-2/3' : 'w-0'} h-screen fixed top-0 z-50 flex flex-col transition-all ease-in-out delay-200`}>
            <aside className="w-full h-full bg-secondary rounded-r-xl flex flex-col z-40">
                <SideBarHeader />
                <SideBarContent />
            </aside>
            <SideBarOverlay />
        </div>
    )
}

export default SideBar
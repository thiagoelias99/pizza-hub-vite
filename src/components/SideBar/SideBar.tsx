import SideBarContent from "./SideBarContent/SideBarContent"
import SideBarHeader from "./SideBarHeader/SideBarHeader"
import SideBarOverlay from './SideBarOverlay/SideBarOverlay'

const SideBar = () => {
    return (
        <>
            <aside className="w-2/3 h-screen bg-secondary rounded-r-xl flex flex-col fixed top-0 z-50">
                <SideBarHeader />
                <SideBarContent />
            </aside>
            <SideBarOverlay />
        </>
    )
}

export default SideBar
import SideBarContent from "./SideBarContent/SideBarContent"
import SideBarHeader from "./SideBarHeader/SideBarHeader"

const SideBar = () => {
    return (
        <aside className="w-2/3 h-screen bg-secondary shadow rounded-xl flex flex-col">
            <SideBarHeader />
            <SideBarContent />
        </aside>
    )
}

export default SideBar
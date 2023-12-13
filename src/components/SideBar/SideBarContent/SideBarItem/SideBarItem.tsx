import { useSideBarState } from '@/hooks/useSideBarState'
import { LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface SideBarItemProps {
    Icon?: LucideIcon
    text?: string
    path?: string
}

const SideBarItem = ({ Icon, text = '', path = '/' }: SideBarItemProps) => {

    const { toggleSideBarState } = useSideBarState()

    return (
        <NavLink to={path} className={({ isActive }) => `flex flex-row gap-4 py-3 justify-start items-center w-auto ${isActive ? 'bg-red-50' : ''}`} onClick={() => toggleSideBarState()}>
            {Icon && <Icon className='pl-2 stroke-secondary-foreground w-6 h-6' />}
            <p className='text-secondary-foreground text-xl font-sideBar w-full truncate'>{text}</p>
        </NavLink>
    )
}

export default SideBarItem
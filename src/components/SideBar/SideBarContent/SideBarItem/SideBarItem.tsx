import { LucideIcon } from 'lucide-react';

interface SideBarItemProps {
    Icon?: LucideIcon
    text?: string
}

const SideBarItem = ({ Icon, text = '' }: SideBarItemProps) => {
    return (
        <div className='flex flex-row gap-4 px-2 py-3 justify-start items-center'>
            {Icon && <Icon className='stroke-secondary-foreground w-6 h-6'/>}
            <p className='text-secondary-foreground text-xl font-sideBar w-full truncate'>{text}</p>
        </div>
    )
}

export default SideBarItem
import SideBarItem from './SideBarItem/SideBarItem'
import { ShoppingBasket } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react'

const SideBarContent = () => {
    return (
        <div>
            <SideBarItem text='Dashboard' Icon={LayoutDashboard} path='/' />
            <SideBarItem text='Produtos' Icon={ShoppingBasket} path='produtos' />
        </div>
    )
}

export default SideBarContent
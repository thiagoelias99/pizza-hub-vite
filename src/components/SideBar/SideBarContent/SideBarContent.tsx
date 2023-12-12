import SideBarItem from './SideBarItem/SideBarItem'
import { ShoppingBasket } from 'lucide-react';

const SideBarContent = () => {
    return (
        <div>
            <SideBarItem text='Ingredientes' Icon={ShoppingBasket} />
        </div>
    )
}

export default SideBarContent
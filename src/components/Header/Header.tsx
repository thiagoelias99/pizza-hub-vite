import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";

const Header = () => {
    return (
        <header className='bg-slate-600 h-12'>
            <div>
                <RiMenuUnfoldLine className='fill-white w-6 h-6'/>
                <RiMenuFoldLine className='fill-white w-6 h-6'/>
            </div>
        </header>
    )
}

export default Header
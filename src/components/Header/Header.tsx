import { PanelLeftOpen } from 'lucide-react';
import PizzaHubLogo from '../../assets/images/logo-white.png'

const Header = () => {
    return (
        <header className='bg-primary h-16 w-screen p-4'>
            <div className='absolute'>
                <PanelLeftOpen className='w-9 h-9 stroke-white' />
            </div>
            <div className='flex items-center justify-center w-full h-full'>
                <img src={PizzaHubLogo} alt='pizza hub logo' className='h-14' />
            </div>
        </header>
    )
}

export default Header
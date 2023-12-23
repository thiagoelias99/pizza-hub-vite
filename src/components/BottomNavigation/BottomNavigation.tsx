import { useBottomNavigationState } from '@/hooks/useBottomNavigationState'
import NavigationTab from './NavigationTab/NavigationTab'

const BottomNavigation = () => {
    const { options } = useBottomNavigationState()

    return (
        <footer className='fixed bottom-0 h-16 bg-secondary w-screen'>
            <p className='w-full h-[2px] bg-secondary-foreground rounded-t-sm'></p>
            <div className={`flex flex-row justify-around items-center h-full bg-secondary-foreground gap-[1px]`}>
                {options.map((option) => (
                    <NavigationTab key={option.label} {...option} />
                ))}
            </div>
        </footer>
    )
}

export default BottomNavigation
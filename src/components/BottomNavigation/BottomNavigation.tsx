import { useBottomNavigationState } from '@/hooks/useBottomNavigationState'
import NavigationTab from './NavigationTab/NavigationTab'
import { useEffect, useState } from 'react'

const BottomNavigation = () => {
    const { options } = useBottomNavigationState()

    const [gridTemplateColumns, setGridTemplateColumns] = useState<string>(`grid-cols-${options.length === 0 ? "1" : options.length.toString()}`)

    useEffect(() => {
        setGridTemplateColumns(`grid-cols-${options.length === 0 ? "1" : options.length.toString()}`)
    }, [options])

    return (
        <footer className='fixed bottom-0 h-16 bg-secondary w-screen'>
            <p className='w-full h-[2px] bg-secondary-foreground rounded-t-sm'></p>
            <div className={`grid ${gridTemplateColumns} h-full bg-secondary-foreground gap-[1px]`}>
                {options.map((option) => (
                    <NavigationTab key={option.label} {...option} />
                ))}
            </div>
        </footer>
    )
}

export default BottomNavigation
import NavigationTab from './NavigationTab/NavigationTab'

const BottomNavigation = () => {
    return (
        <footer className='fixed bottom-0 h-16 bg-secondary w-screen'>
            <p className='w-full h-[2px] bg-secondary-foreground rounded-t-sm'></p>
            <div className='grid grid-cols-3 h-full bg-secondary-foreground gap-[1px]'>
                <NavigationTab />
                <NavigationTab />
                <NavigationTab />
            </div>
        </footer>
    )
}

export default BottomNavigation
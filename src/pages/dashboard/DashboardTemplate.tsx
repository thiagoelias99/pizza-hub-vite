import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import FloatingActionButton from '@/components/FloatingActionButton/FloatingActionButton'
import Header from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const DashboardTemplate = () => {
    return (
        <section className='w-screen h-screen'>
            <Header />
            <SideBar />
            <div className='pt-16'>
                <Outlet />
            </div>
            <BottomNavigation />
            <FloatingActionButton />
        </section>
    )
}

export default DashboardTemplate
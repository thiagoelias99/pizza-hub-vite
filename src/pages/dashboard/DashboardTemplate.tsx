import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import DialogContainer from '@/components/Dialogs/DialogContainer'
import FloatingActionButton from '@/components/FloatingActionButton/FloatingActionButton'
import Header from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'
import Toast from '@/components/Toast/Toast'
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
            <DialogContainer />
            <Toast />
        </section>
    )
}

export default DashboardTemplate
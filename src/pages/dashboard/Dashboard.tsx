import SideBar from '@/components/SideBar/SideBar'
import Header from '../../components/Header/Header'

const Dashboard = () => {
  return (
    <section className='w-screen h-screen'>
      <Header />
      <SideBar />
      <div>
        <h1>Dashboard</h1>
      </div>
    </section>
  )
}

export default Dashboard
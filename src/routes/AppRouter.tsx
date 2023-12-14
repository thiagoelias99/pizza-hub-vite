import Dashboard from '@/pages/dashboard/Dashboard'
import DashboardTemplate from '@/pages/dashboard/DashboardTemplate'
import Products from '@/pages/dashboard/products/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashboardTemplate />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/produtos' element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
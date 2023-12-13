import Dashboard from '@/pages/dashboard/Dashboard'
import DashboardTemplate from '@/pages/dashboard/DashboardTemplate'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashboardTemplate />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/ingredientes' element={<h1>Ingredients</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
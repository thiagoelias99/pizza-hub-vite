import { useBottomNavigationState } from '@/hooks/useBottomNavigationState'
import { useEffect } from 'react'

const Dashboard = () => {
  const { setOptions } = useBottomNavigationState()

  useEffect(() => {
      setOptions([])
  }, [])
  
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
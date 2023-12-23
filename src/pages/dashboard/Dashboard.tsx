import { useBottomNavigationState } from '@/hooks/useBottomNavigationState'
import { useFab } from '@/hooks/useFab'
import { useEffect } from 'react'

const Dashboard = () => {
  const { setOptions } = useBottomNavigationState()
  const { setFab } = useFab()

  useEffect(() => {
    setOptions([])
    setFab({
      visible: false
    })
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
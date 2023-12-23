import { Link } from 'react-router-dom'
import { Image } from 'lucide-react'
import { NavigationTabProps } from './NavigationTabProps'

const NavigationTab = ({ label = "label", Icon = Image, selected = false, path = '/' }: NavigationTabProps) => {
  return (
    <Link to={path} className='flex flex-col justify-center items-center bg-primary'>
      <Icon className='w-6 h-6 stroke-primary-foreground' />
      <p className={`text-primary-foreground text-base font-bold`}>{label}</p>
      <div className={`w-full h-1 ${selected && "bg-primary-foreground"} rounded`}></div>
    </Link>
  )
}

export default NavigationTab
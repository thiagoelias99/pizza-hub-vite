import { Image } from 'lucide-react'
import { NavigationTabProps } from './NavigationTabProps'

const NavigationTab = ({ label = "label", Icon = Image, selected = false }: NavigationTabProps) => {
  return (
    <div className='flex flex-col justify-center items-center bg-primary'>
      <Icon className='w-6 h-6 stroke-primary-foreground' />
      <p className='text-primary-foreground text-base font-bold'>{label}</p>

      <div className={`w-2/3 h-1 ${selected && "bg-primary-foreground"} rounded`}></div>

    </div>
  )
}

export default NavigationTab
import PizzaHubLogoRed from '../../../assets/images/logo-red.png'

const SideBarHeader = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center my-2'>
            <img src={PizzaHubLogoRed} alt='Pizza hub logo in red' className='h-16' />
            <p className='w-full h-[1px] bg-secondary-foreground mt-2'></p>
        </div>
    )
}

export default SideBarHeader
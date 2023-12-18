
interface CardModel1Props {
    description: string
    info?: string
    className?: string
}

const CardModel1 = ({ description, info = "", className = "" }: CardModel1Props) => {
    return (
        <div className={`flex flex-col justify-between items-start h-20 w-full px-4 py-2 border-2 border-primary rounded ${className}`}>
            <h3 className='text-xl text-primary font-bold'>{description}</h3>
            <p className='text-base text-black'>{info}</p>
        </div>
    )
}

export default CardModel1
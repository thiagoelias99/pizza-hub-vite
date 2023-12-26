interface Header2Props {
    text: string
    className?: string
}

const Header2 = ({ text, className }: Header2Props) => {
    return (
        <h2 className={`text-2xl text-secondary-foreground font-bold w-full text-center ${className}`}>{text}</h2>
    )
}

export default Header2
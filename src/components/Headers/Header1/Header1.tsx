interface Header1Props {
    text: string
    className?: string
}

const Header1 = ({ text, className }: Header1Props) => {
    return (
        <h1 className={`text-3xl text-secondary-foreground font-bold ${className}`}>{text}</h1>
    )
}

export default Header1
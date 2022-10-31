interface AppBtnProps {
    children: string | JSX.Element | JSX.Element[],
    onClick?: Function,
    size?: string,
    outline?: boolean,
    bgColor?: string
}

const AppBtn = ({children = 'Button',onClick,size = 'btn-md', bgColor = 'bg-secondary', outline = false }: AppBtnProps) : JSX.Element => {

    const clickHandler = () => {
        if(!!onClick) {
            onClick()
        }
    }

    return (
        <button className={`btn ${size} ${bgColor} ${outline ? 'btn-outline' : ''}`} onClick={clickHandler}>
            {children}
        </button>
    )
}

export default AppBtn
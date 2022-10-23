interface AppMainProps {
    children: JSX.Element | JSX.Element[] | string
}

const AppMain = (props : AppMainProps) : JSX.Element => {
    return (
        <main>
            {props.children}
        </main>
    )
}

export default AppMain
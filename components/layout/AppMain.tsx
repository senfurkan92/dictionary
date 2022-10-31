interface AppMainProps {
    children: JSX.Element | JSX.Element[] | string
}

const AppMain = (props : AppMainProps) : JSX.Element => {
    return (
        <main className="mx-auto container py-8">
            {props.children}
        </main>
    )
}

export default AppMain
import AppHeader from "./AppHeader"
import AppMain from "./AppMain"
import AppFooter from "./AppFooter"
import Head from "next/head"

interface AppLayoutProps {
    children: JSX.Element | JSX.Element[] | string
}

const AppLayout = (props: AppLayoutProps) : JSX.Element => {
    return (
        <>
        <Head>
            <title>Dictionray-App</title>
            <meta name="description" content="Developed by FurkanSen"></meta>
        </Head>
        <div className="min-h-[100vh] grid grid-rows-[max-content_auto_max-content]">
            <AppHeader></AppHeader>
            <AppMain>
                {props.children}
            </AppMain>
            <AppFooter></AppFooter>
        </div>
        </>
    )
}

export default AppLayout
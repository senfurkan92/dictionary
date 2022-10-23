import Link from "next/link"
import Image from "next/future/image"
import logo from '../../static/logo.png'

const AppHeader = () : JSX.Element => {
    return (
        <header 
            className="bg-base-300 border-b border-b-secondary/75"
        >
            <div 
                className="mx-auto container py-4"
            >
                <div 
                    className="grid grid-cols-[max-content_auto_max-content] items-center"
                >
                    {/* logo */}
                    <div>
                        <Link 
                            href={'/'}
                        >
                            <Image 
                                src={logo} 
                                alt="Dictionary App"
                                width={60}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>
                    {/* navlinks */}
                    <div 
                        className="flex justify-center gap-6"
                    >
                        <Link href={'/'}>
                            <span className="link-content">
                                Favorites
                            </span>
                        </Link>
                        <Link href={'/'}>
                            <span className="link-content">
                                Quiz
                            </span>   
                        </Link>
                        <Link href={'/'}>
                            <span className="link-content">
                                Manage
                            </span>     
                        </Link>
                        <Link href={'/'}>
                            <span className="link-content">
                                Report
                            </span>
                        </Link>
                    </div>
                    {/* search */}
                    <div>
                        <div className="form-control">
                            <div className="input-group input-group-sm">
                                <input type="text" placeholder="Search…" className="input input-sm" />
                                <button className="btn btn-sm btn-square bg-secondary/60 hover:bg-secondary-focus active:bg-secondary-focus">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader
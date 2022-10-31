import Link from "next/link"
import Image from "next/future/image"
import logo from '../../public/logo.png'

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
                            <div>
                                <Image 
                                    src={logo} 
                                    alt="Dictionary App"
                                    width={60}
                                    className="cursor-pointer"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* navlinks */}
                    <div 
                        className="flex justify-center gap-6"
                    >
                        <Link href={'/favorites'}>
                            <span className="link-content">
                                Favorites
                            </span>
                        </Link>
                        <Link href={'/quiz'}>
                            <span className="link-content">
                                Quiz
                            </span>   
                        </Link>
                        <Link href={'/manage'}>
                            <div className="dropdown dropdown-end dropdown-hover">
                                <label tabIndex={0} className="link-content">Hover</label>
                                <ul tabIndex={0} className=" transition-all duration-1000 dropdown-content menu shadow bg-transparent rounded-box w-52 py-7 translate-x-1/2">
                                    <li className="bg-base-300 px-2 py-2 rounded-none">
                                        <Link href="/manage/words">Words</Link>
                                    </li>
                                    <li className="bg-base-300 px-2 pb-2 rounded-none">
                                        <Link href="/manage/words">Words</Link>
                                    </li>
                                </ul>
                            </div>    
                        </Link>
                        <Link href={'/report'}>
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
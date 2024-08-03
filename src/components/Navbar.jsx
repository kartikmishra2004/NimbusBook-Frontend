import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../storage/Auth';

const Navbar = () => {
    const { isLoggedIn } = useAuth();

    let [mobileNav, setMobileNav] = useState('left-full');
    const handleToggleMenu = () => {
        if (mobileNav === 'left-full') {
            setMobileNav('left-0')
        }
        else {
            setMobileNav('left-full')
        }
    }
    return (
        <nav className="bg-white border-zinc-200 border-b-2 font-nunito fixed w-[100%] z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-[1.25rem]">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-3xl font-bold text-indigo-500 whitespace-nowrap">NimbusBook</span>
                </Link>
                <button onClick={handleToggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row lg:gap-16 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link to="/"
                                className="block text-center py-2 pl-3 pr-4 hover:text-indigo-600 text-indigo-500 text-[1rem] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/notes"
                                className="block text-center py-2 pl-3 pr-4 hover:text-indigo-600 text-indigo-500 text-[1rem] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0">Notes</Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                className="block text-center py-2 pl-3 pr-4 hover:text-indigo-600 text-indigo-500 text-[1rem] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-3 md:mt-0 md:border-0 md:bg-white">
                        {isLoggedIn ? <li>
                            <Link to="/logout"
                                className="text-white bg-indigo-500 hover:bg-indigo-700 transition-all duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Logout</Link>
                        </li> : ""}
                        {isLoggedIn ? "" : (<><li>
                            <Link to="/signup"
                                className="text-white bg-indigo-500 hover:bg-indigo-700 transition-all duration-300 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Signup</Link>
                        </li>
                            <li>
                                <Link to="/login"
                                    className="text-indigo-500 border-indigo-500 border-2 transition-all duration-300 ease-in-out font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Login</Link>
                            </li></>)}
                    </ul>
                </div>
                <div id="mobileNav"
                    className={`${mobileNav} z-10 md:hidden flex justify-center fixed items-center flex-col gap-8 border-y-2 border-zinc-200 px-4 text-[1.2rem] text-center bg-white h-max inset-0 top-[5rem] w-[100%] ease-in-out duration-500 cursor-pointer`}>
                    <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link to="/"
                                onClick={handleToggleMenu}
                                className="block text-center py-2 pl-3 pr-4 text-indigo-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-500 lg:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/notes"
                                onClick={handleToggleMenu}
                                className="block text-center py-2 pl-3 pr-4 text-indigo-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-500 lg:p-0">Notes</Link>
                        </li>
                        <li>
                            <Link to="/contact"
                                onClick={handleToggleMenu}
                                className="block text-center py-2 pl-3 pr-4 text-indigo-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-500 lg:p-0 ">Contact</Link>
                        </li>
                        {isLoggedIn ? <li>
                            <Link to="/logout"
                                onClick={handleToggleMenu}
                                className="block text-center py-2 pl-3 pr-4 text-red-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-500 lg:p-0 ">Logout</Link>
                        </li> : ""}
                        {isLoggedIn ? "" : (<><li>
                            <Link to="/signup"
                                onClick={handleToggleMenu}
                                className="block text-center py-2 pl-3 pr-4 text-indigo-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-500 lg:p-0 ">Signup</Link>
                        </li>
                            <li>
                                <Link to="/login"
                                    onClick={handleToggleMenu}
                                    className="block text-center py-2 pl-3 pr-4 text-indigo-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-indigo-500 lg:p-0 ">Login</Link>
                            </li></>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

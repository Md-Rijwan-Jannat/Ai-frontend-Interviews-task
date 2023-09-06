import { useState } from "react";
import { FaBars, FaHistory } from 'react-icons/fa';
import { BsChatSquare, BsPersonAdd, BsX } from 'react-icons/bs';
import { BiSolidEdit, BiSolidEditAlt } from 'react-icons/bi';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { IoShieldCheckmark } from 'react-icons/io5';
import { Link } from "react-router-dom";
import Body from "../component/Body";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const [showSecondLink, setShowSecondLink] = useState(false);

    const toggleSecondLink = () => {
        setShowSecondLink(!showSecondLink);
    };
    return (
        <div className="flex gap-10 mt-5 p-5">
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-600">
                    <FaBars />
                </button>
            </div>
            <aside className={`hidden md:block min-h-screen px-5 py-8 overflow-y-auto bg-white border rounded dark:bg-gray-900 dark:border-gray-700 shadow-md`}
            >
                <div onClick={closeMenu} className="flex justify-end p-3 md:hidden"><BsX></BsX></div>
                <div className="border border-[#8191C9] rounded text-center w-full py-3">
                    <p className="text-[#8191C9]">+ New Chat</p>
                </div>
                <div className="flex gap-5 items-center justify-center mt-5 text-gray-600">
                    <FaHistory className="text-[25px]"></FaHistory>
                    <p className="font-medium">History</p>
                </div>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6">
                        <div className="">

                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium mt-1"><BsChatSquare></BsChatSquare></span>
                                    <span className="text-sm font-medium">New Chat</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"> <BiSolidEditAlt></BiSolidEditAlt></span>
                                    <span className="text-sm font-medium"><RiDeleteBin2Line></RiDeleteBin2Line></span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium mt-1"><BsChatSquare></BsChatSquare></span>
                                    <span className="text-sm font-medium">What is marketing</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"> <BiSolidEditAlt></BiSolidEditAlt></span>
                                    <span className="text-sm font-medium"><RiDeleteBin2Line></RiDeleteBin2Line></span>
                                </div>
                            </Link>
                            <Link onClick={toggleSecondLink} className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium mt-1"><BsChatSquare></BsChatSquare></span>
                                    <span className="text-sm font-medium">Gibe me a list of..</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"> <BiSolidEditAlt></BiSolidEditAlt></span>
                                    <span className="text-sm font-medium"><RiDeleteBin2Line></RiDeleteBin2Line></span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg border dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-black text-center mt-2" to={'#'}>
                                <span className="text-sm font-medium">Give me a list of marketing apeticis near me in 5 am</span>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center mt-28" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><BsPersonAdd size={19}></BsPersonAdd></span>
                                    <span className="text-sm font-medium">Upgrade to Plus</span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center " to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><HiOutlineExternalLink size={19}></HiOutlineExternalLink></span>
                                    <span className="text-sm font-medium">Updates & FAQ</span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><BiSolidEdit size={19}></BiSolidEdit></span>
                                    <span className="text-sm font-medium">Upgrade to Plus</span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><IoShieldCheckmark size={19}></IoShieldCheckmark></span>
                                    <span className="text-sm font-medium">Privacy policy Page</span>
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </aside>
            <aside className={`${isOpen ? 'md:block' : 'md:hidden'
                } fixed top-0 left-0 z-50 min-h-screen px-5 py-8 overflow-y-auto bg-white border rounded dark:bg-gray-900 dark:border-gray-700 shadow-md transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div onClick={closeMenu} className="flex justify-end p-3 md:hidden"><BsX></BsX></div>
                <div className="border border-[#8191C9] rounded text-center w-full py-3">
                    <p className="text-[#8191C9]">+ New Chat</p>
                </div>
                <div className="flex gap-5 items-center justify-center mt-5 text-gray-600">
                    <FaHistory className="text-[25px]"></FaHistory>
                    <p className="font-medium">History</p>
                </div>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6">
                        <div className="">

                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium mt-1"><BsChatSquare></BsChatSquare></span>
                                    <span className="text-sm font-medium">New Chat</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"> <BiSolidEditAlt></BiSolidEditAlt></span>
                                    <span className="text-sm font-medium"><RiDeleteBin2Line></RiDeleteBin2Line></span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium mt-1"><BsChatSquare></BsChatSquare></span>
                                    <span className="text-sm font-medium">What is marketing</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"> <BiSolidEditAlt></BiSolidEditAlt></span>
                                    <span className="text-sm font-medium"><RiDeleteBin2Line></RiDeleteBin2Line></span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium mt-1"><BsChatSquare></BsChatSquare></span>
                                    <span className="text-sm font-medium">Gibe me a list of..</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"> <BiSolidEditAlt></BiSolidEditAlt></span>
                                    <span className="text-sm font-medium"><RiDeleteBin2Line></RiDeleteBin2Line></span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg border dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 border-black text-center mt-2" to={'#'}>
                                <span className="text-sm font-medium">Give me a list of marketing apeticis near me in 5 am</span>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center mt-28" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><BsPersonAdd size={19}></BsPersonAdd></span>
                                    <span className="text-sm font-medium">Upgrade to Plus</span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center " to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><HiOutlineExternalLink size={19}></HiOutlineExternalLink></span>
                                    <span className="text-sm font-medium">Updates & FAQ</span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><BiSolidEdit size={19}></BiSolidEdit></span>
                                    <span className="text-sm font-medium">Upgrade to Plus</span>
                                </div>
                            </Link>
                            <Link className="flex items-center justify-between px-3 py-3 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 text-center" to={'#'}>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium"><IoShieldCheckmark size={19}></IoShieldCheckmark></span>
                                    <span className="text-sm font-medium">Privacy policy Page</span>
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </aside>
            <div className={`w-full ${isOpen ? 'md:ml-80' : ''}`}>
                <Body />
            </div>
        </div>
    );
};

export default Home;
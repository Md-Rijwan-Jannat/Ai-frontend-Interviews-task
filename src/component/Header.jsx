import { Link } from 'react-router-dom';
import headerImage from '../../../public/Images/header-icon.png'
import UserProfile from '../../../public/Images/User circle-icon.png'
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <div className="bg-[#0095A9] flex justify-between items-center rounded">
            <div className='bg-[#EBFDFF] px-2 py-[2px] mx-3 my-2 rounded-md border border-black'>
                <img src={headerImage} alt="" />
            </div>
            <div className='flex items-center gap-10 mx-4'>
                <div className="relative inline-block">
                    {/* Dropdown toggle button */}
                    <button
                        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-black rounded-md dark:bg-gray-800 focus:outline-none"
                    >
                        <span className="mx-1">Select the department: Marketing</span>
                        <svg
                            className="w-5 h-5 mx-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className='flex items-center gap-2 text-lg text-white'>
                    <div className="relative inline-block">
                        {/* Dropdown toggle button */}
                        <div
                            onClick={toggleMenu}
                            className="relative z-10 flex items-center gap-2"
                        >
                            <img className='w-[30px]' src={UserProfile} alt="" />
                            <span>{'Nithin'}</span>
                        </div>

                        {/* Dropdown menu */}
                        {isOpen && (
                            <div
                            onClick={closeMenu}
                                className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                            >
                                <Link
                                    to={'#'}
                                    className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <img
                                        className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                        src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                                        alt="nithin"
                                    />
                                    <div className="mx-1">
                                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                            Nithin
                                        </h1>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            mithin@example.com
                                        </p>
                                    </div>
                                </Link>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    View Profile
                                </Link>

                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Settings
                                </Link>

                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Keyboard Shortcuts
                                </Link>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Company Profile
                                </Link>

                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Team
                                </Link>

                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Invite Colleagues
                                </Link>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Help
                                </Link>
                                <Link
                                    to={'#'}
                                    className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    Sign Out
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
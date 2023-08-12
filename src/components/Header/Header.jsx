import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [activeButton, setActiveButton] = useState(2);

    // const handleClick = (buttonIndex) => {
    //     setActiveButton(buttonIndex);
    // };

    return (
        <div className="bg-stone-900">
            <div className="w-10/12 mx-auto relative py-4 flex justify-between items-center">
                <div>
                    <h2 className="text-teal-400 text-3xl font-bold">
                        Amir Hamza
                    </h2>
                </div>

                <div className="px-5">
                    <div className="lg:flex items-center hidden space-x-8 text-gray-200">
                        <a href="#home">Home</a>
                        <a href="#about">About Me</a>
                        <a href="#skills">My Skills</a>
                        <a href="#project">Project</a>
                        <a href="#contact">Contact Me</a>
                    </div>
                </div>

                <div className="lg:hidden z-10">
                    <button aria-label="Open Menu" title="Open Menu" onClick={() => setMenuOpen(true)} >
                        <Bars3Icon className="w-5 text-white" />
                    </button>

                    {menuOpen && (
                        <div className="absolute top-0 left-0 w-full z-10">
                            <div className="bg-stone-900 p-5 border rounded shadow-sm">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-teal-400 text-2xl font-bold">
                                            Amir Hamza
                                        </h2>
                                    </div>

                                    <div className="text-lg flex items-center space-x-4">
                                        <div>
                                            <button aria-label="Close Menu" title="Close Menu" onClick={() => setMenuOpen(false) } >
                                                <XMarkIcon className="w-5 text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <nav>
                                    <ul className="font-semibold text-gray-300 space-y-4 mt-5 ml-4">
                                        <li><a href="#home">Home</a></li>
                                        <li><a href="#about">About Me</a></li>
                                        <li><a href="#skills">My Skills</a></li>
                                        <li><a href="#project">Project</a></li>
                                        <li><a href="#contact">Contact Me</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;

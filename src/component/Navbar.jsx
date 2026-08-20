import { useEffect, useState } from 'react';
import imagesDatas from '../data/imgImports';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo_ccdt from '../assets/img/logo/Logo ccdt.png';
import logo_eagles from '../assets/img/logo/Logo_Eagles warna.png';
import logo_intech from '../assets/img/logo/logo intech.png';

function Navbar() {
    const { hash } = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    useEffect(() => {
        const toggleButton = document.querySelector('.toggle-btn');
        const navbarLinks = document.querySelector('.menu');

        const handleToggle = () => {
            navbarLinks.classList.toggle('block');
            navbarLinks.classList.toggle('hidden');
        };

        toggleButton.addEventListener('click', handleToggle);

        return () => {
            toggleButton.removeEventListener('click', handleToggle);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-50 text-white transition-all duration-300 ${scrolled ? "bg-hitam/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
            <div className="w-navfot flex flex-wrap items-center justify-between mx-auto p-7">
                <a href="/">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={imagesDatas.LOGO_UKM_PUTIH} className="lg:h-10 h-8" alt="Logo UKM" loading="lazy" decoding="async" />
                        <span className="self-center lg:text-xl text-lg font-semibold whitespace-nowrap">Computer Club</span>
                    </div>
                </a>

                <button type="button" className="toggle-btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <i className="fa-solid fa-bars"></i>
                </button>

                {/* Pill menu - desktop */}
                <div className="menu hidden w-full lg:block lg:w-auto" id="menu">
                    <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:mt-0 lg:flex-row lg:items-center bg-hitam lg:bg-white/10 lg:backdrop-blur-sm rounded-lg lg:rounded-full lg:px-1.5 lg:py-1 border border-gray-100 lg:border-white/10 text-sm">
                        <li className="m-1 p-1">
                            <a href="/#beranda" className="NavbarLink lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-white/15 transition-colors" aria-current="page">Beranda</a>
                        </li>
                        <li className="m-1 p-1">
                            <a href="/#tentang" className="NavbarLink lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-white/15 transition-colors">Tentang Kami</a>
                        </li>
                        <li className="m-1 p-1 relative group">
                            <a href="/#divisi" className="NavbarLink lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-white/15 transition-colors">
                                Divisi
                                <i className="ml-1 fa-solid fa-angle-down transition-transform duration-300 group-hover:-rotate-180"></i>
                            </a>

                            <ul className="absolute z-10 -left-3 pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-hitam text-putih rounded-lg shadow-lg w-48">
                                <li>
                                    <NavLink to="/divisi/office" onClick={() => window.location.href = "/divisi/office"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                        Office
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/divisi/vcd" onClick={() => window.location.href = "/divisi/vcd"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                        Visual Communication Design
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/divisi/web" onClick={() => window.location.href = "/divisi/web"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                        Web Development
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/divisi/game" onClick={() => window.location.href = "/divisi/game"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                        Game Development
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="m-1 p-1 relative group">
                            <a href="/#proker" className="NavbarLink lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-white/15 transition-colors">
                                Program Kerja
                                <i className="ml-1 fa-solid fa-angle-down transition-transform duration-300 group-hover:-rotate-180"></i>
                            </a>

                            <ul className="absolute z-10 -left-3 pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-hitam text-putih rounded-lg shadow-lg w-48">
                                <li>
                                    <NavLink to="/programkerja/ccdt" onClick={() => window.location.href = "/programkerja/ccdt"} className={({ isActive }) => `flex px-4 py-2 rounded-lg cursor-pointer ${isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                        <div className="bg-putih rounded-full z-30 w-6 h-6 mr-2 flex justify-center items-center overflow-hidden">
                                            <img src={`${logo_ccdt}`} className="w-[70%] mx-auto" loading="lazy" decoding="async"></img>
                                        </div>
                                        CCDT
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/programkerja/eagles" onClick={() => window.location.href = "/programkerja/eagles"} className={({ isActive }) => `flex px-4 py-2 rounded-lg cursor-pointer ${isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                        <div className="bg-putih rounded-full z-30 w-6 h-6 mr-2 flex justify-center items-center overflow-hidden">
                                            <img src={`${logo_eagles}`} className="w-[70%] mx-auto" loading="lazy" decoding="async"></img>
                                        </div>
                                        EAGLES
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/programkerja/intechfest" onClick={() => window.location.href = "/programkerja/intechfest"} className={({ isActive }) => `flex px-4 py-2 rounded-lg cursor-pointer ${isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                        <div className="bg-putih rounded-full z-30 w-6 h-6 mr-2 flex justify-center items-center overflow-hidden">
                                            <img src={`${logo_intech}`} className="w-[70%] mx-auto" loading="lazy" decoding="async"></img>
                                        </div>
                                        INTECHFEST
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#fungsio" className="NavbarLink lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-white/15 transition-colors">Fungsionaris</a>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#faq" className="NavbarLink lg:px-4 lg:py-2 lg:rounded-full lg:hover:bg-white/15 transition-colors">FAQ</a>
                        </li>

                        {/* Tombol CTA versi mobile/tablet */}
                        <li className="m-1 p-1 lg:hidden mt-4">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6nm4j9pOFA_agi2tHWJoE15lSt1CmpH9JXPEF5uVsgkRM8g/viewform" target="_blank" rel="noopener noreferrer" className="block text-center bg-secondary hover:bg-primary py-2 px-5 rounded-full text-white text-sm font-semibold ease-in-out transition-all">
                                Daftar Sekarang
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Tombol CTA - tampil di kanan hanya desktop */}
                <div className="hidden lg:block">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6nm4j9pOFA_agi2tHWJoE15lSt1CmpH9JXPEF5uVsgkRM8g/viewform" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-primary py-2 px-5 rounded-full text-white text-sm font-semibold ease-in-out transition-all">
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
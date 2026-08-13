import { useEffect, useState } from 'react';
import imagesDatas from '../data/imgImports';
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo_ccdt from '../assets/img/logo/Logo ccdt.png';
import logo_eagles from '../assets/img/logo/Logo_Eagles warna.png';
import logo_intech from '../assets/img/logo/logo intech.png';

function Navbar(){
    const { hash } = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [hash]);
    
    //native
    useEffect(() => {
        const toggleButton = document.querySelector('.toggle-btn');
        const navbarLinks = document.querySelector('.menu');
    
        const handleToggle = () => {
            navbarLinks.classList.toggle('block');
            navbarLinks.classList.toggle('hidden');
        };
    
        toggleButton.addEventListener('click', handleToggle);
    
        // Cleanup listener saat komponen di-unmount
        return () => {
            toggleButton.removeEventListener('click', handleToggle);
        };
    }, []);

    //tampilan
    return (
        <nav className="bg-hitam text-white border-gray-200 fixed w-full z-50">
            <div className="w-navfot flex flex-wrap items-center justify-between mx-auto p-3">
            <a href="/">    
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={imagesDatas.LOGO_UKM_PUTIH} className="md:h-10 h-8" alt="Logo UKM" loading="lazy"/>
                    <span className="self-center md:text-xl text-lg font-semibold whitespace-nowrap">Computer Club</span>
                </div>
            </a>
                <button type="button" className="toggle-btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="menu hidden w-full md:block md:w-auto" id="menu">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-hitam">
                        <li className='m-1 p-1'>
                            <a href="/#beranda" className="NavbarLink" aria-current="page">Beranda</a>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#tentang" className="NavbarLink">Tentang Kami</a>
                        </li>
                        {/* <li className='m-1 p-1'>
                            <a href="/#divisi" className="NavbarLink">Divisi</a>
                        </li> */}
                        <li className="m-1 p-1 relative group">
                            {/* kalau diklik, ke #divisi */}
                            <a href="/#divisi" className="NavbarLink">
                                Divisi
                                <i className="ml-1 fa-solid fa-angle-down transition-transform duration-300 group-hover:-rotate-180"></i>
                            </a>

                            {/* Dropdown Divisi */}
                            <ul className="absolute z-10 -left-3 pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-hitam text-putih rounded-lg shadow-lg w-48">
                                <li>
                                <NavLink to="/divisi/office" onClick={() => window.location.href = "/divisi/office"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${
                                    isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                    Office
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/divisi/web" onClick={() => window.location.href = "/divisi/web"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${
                                    isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                    Web Development
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/divisi/vcd" onClick={() => window.location.href = "/divisi/vcd"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${
                                    isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                    Visual Communication Design
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/divisi/game" onClick={() => window.location.href = "/divisi/game"} className={({ isActive }) => `block px-4 py-2 rounded-lg cursor-pointer ${
                                    isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                    Game Development
                                </NavLink>
                                </li>
                            </ul>
                        </li>
                        {/* <li className='m-1 p-1'>
                            <a href="/#proker" className="NavbarLink">Program Kerja</a>
                        </li> */}
                        <li className="m-1 p-1 relative group">
                            {/* kalau diklik, ke #divisi */}
                            <a href="/#proker" className="NavbarLink">
                                Program Kerja
                                <i className="ml-1 fa-solid fa-angle-down transition-transform duration-300 group-hover:-rotate-180"></i>
                            </a>

                            {/* Dropdown Proker */}
                            <ul className="absolute z-10 -left-3 pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-hitam text-putih rounded-lg shadow-lg w-48">
                                <li>
                                <NavLink to="/programkerja/ccdt" onClick={() => window.location.href = "/programkerja/ccdt"} className={({ isActive }) => `flex px-4 py-2 rounded-lg cursor-pointer ${
                                    isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                    <div className="bg-putih rounded-full z-30 w-6 h-6 mr-2 flex justify-center items-center overflow-hidden">
                                        <img src={`${logo_ccdt}`} className="w-[70%] mx-auto" loading="lazy"></img>
                                    </div>
                                    CCDT
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/programkerja/eagles" onClick={() => window.location.href = "/programkerja/eagles"} className={({ isActive }) => `flex px-4 py-2 rounded-lg cursor-pointer ${
                                    isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                    <div className="bg-putih rounded-full z-30 w-6 h-6 mr-2 flex justify-center items-center overflow-hidden">
                                        <img src={`${logo_eagles}`} className="w-[70%] mx-auto" loading="lazy"></img>
                                    </div>
                                    EAGLES
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/programkerja/intechfest" onClick={() => window.location.href = "/programkerja/intechfest"} className={({ isActive }) => `flex px-4 py-2 rounded-lg cursor-pointer ${
                                    isActive ? "bg-secondary font-semibold" : "hover:bg-secondary"}`}>
                                    <div className="bg-putih rounded-full z-30 w-6 h-6 mr-2 flex justify-center items-center overflow-hidden">
                                        <img src={`${logo_intech}`} className="w-[70%] mx-auto" loading="lazy"></img>
                                    </div>
                                    IntechFest
                                </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#fungsio" className="NavbarLink">Fungsionaris</a>
                        </li>
                        <li className='m-1 p-1'>
                            <a href="/#faq" className="NavbarLink">FAQ</a>
                        </li>
                        <li className='m-1 p-1'>
                            <NavLink to="/quiz" onClick={() => window.location.href = "/quiz"} className="bg-secondary hover:bg-primary py-2 px-3 rounded-lg text-white ease-in-out transition-all">Daftar Sekarang</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
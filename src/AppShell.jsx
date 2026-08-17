import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
// import Fab from './component/Fab';
import bg_rectangle from './assets/img/ornamen/Rectangle.png';

function AppShell() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durasi animasi dalam milidetik
          once: false, // Animasi hanya dijalankan sekali saat scroll
        });
    }, []);
    
    return (
        <div 
            className="overflow-x-hidden overflow-y-hidden relative"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${bg_rectangle})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundAttachment: 'fixed' 
            }}
        >
            <Navbar/>
            <Outlet/>
            {/* <Fab/> */}
            <Footer/>
        </div>
    );
}

export default AppShell;
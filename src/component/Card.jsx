import Button from "./Button";
import logo from '../../src/assets/img/logo/LOGO UKM PUTIH.png';

function Card(props) {
    const {img, divisi, href, singkatan} = props;
    return(
        <div data-aos="zoom-in" className="w-full">
            <div className="group relative w-full h-[28rem] sm:h-[32rem] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border-2 border-transparent hover:border-secondary bg-[#0a0a0a] shadow-lg shadow-black/50">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    style={{ backgroundImage: `url(${img})` }}
                ></div>

                {/* Gradient Overlay for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content Container (Bottom Aligned) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end z-10">
                    
                    {/* Texts */}
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-16">
                        <p className="text-secondary text-xs sm:text-sm font-bold tracking-widest uppercase mb-1 drop-shadow-md">
                            DIVISI • {singkatan}
                        </p>
                        <h3 className={`text-putih font-semibold transition-colors duration-300 group-hover:text-secondary drop-shadow-lg leading-snug ${
                            divisi === 'Visual Communication Design' 
                                ? 'text-lg sm:text-xl lg:text-lg xl:text-xl' 
                                : 'text-xl sm:text-2xl lg:text-xl xl:text-2xl whitespace-nowrap'
                        }`}>
                            {divisi === 'Visual Communication Design' ? (
                                <>Visual Communication<br/>Design</>
                            ) : (
                                divisi
                            )}
                        </h3>
                    </div>
                    
                    {/* Hover Button - Only "Lihat Selengkapnya" */}
                    <div className="absolute bottom-6 left-6 right-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <a 
                            href={href} 
                            className="block w-full py-3 sm:py-4 px-4 bg-[#2b2b2b] hover:bg-[#3b3b3b] text-putih text-xs sm:text-sm font-bold tracking-widest text-center rounded-xl transition-colors border border-gray-600 shadow-md"
                        >
                            LIHAT SELENGKAPNYA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card
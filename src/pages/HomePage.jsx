import Button from "../component/Button";
import Card from "../component/Card";
import CardProker from "../component/CardProker";
import divisiData from '../data/divisi/data';
import prokerData from '../data/proker/data';
import data1 from '../data/FAQ/data1';
import homepage from '../data/homepage/data';
import YouTube from "react-youtube";
import { useState } from 'react';
import imagesData from "../data/imgImports";

function HomePage() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAnswer = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };
    const onPlayerReady = (event) => {
        event.target.playVideo();
    }
    
    const opts= {
    playerVars: {
        controls: 1,
        autoplay: 0,
        iv_load_policy:3,
        playsinline:1,
        fs: 1,
        rel:0,
        disablekb: 0,
        showinfo: 0,
        mute: 0,
        loop: 1,
        playlist: "kWpNlGmop0c",
    },
    };

    return (
        <div>
            <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed"/>

            <section className="relative" id="beranda">
                    <div className="py-8 mt-16 md:mt-0 w-full md:w-screen h-full xl:h-screen bg-center justify-center items-center bg-fixed overflow-hidden bg-[length:100%] lg:bg-[length:120%] sm:bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imagesData.foto_bersama})`, }}>
                        <div className="h-full xl:h-screen flex text-white justify-center items-center">

                            {/* <div className="w-full md:w-3/4 mx-auto lg:hidden" data-aos="fade-down">
                                <div className="w-full mb-5">
                                    <img src={imagesData.bersama2} className="w-full rounded-md" alt="Foto 2" loading="lazy"></img>
                                </div>
                            </div> */}

                            {/* <div className="w-full lg:w-[60%] flex-col items-center" data-aos="fade-up">
                                <h1 className="uppercase text-center text-xl md:text-4xl lg:text-left lg:text-6xl font-semibold mb-">unit kegiatan mahasiswa computer club</h1>
                                <div className="mb-2 lg:mb-5 md:text-lg"> 
                                    <h3 className="lg:text-justify text-center">Selamat Datang di dunia penuh inovasi dan kerjasama:</h3> 
                                    <h3 className="lg:text-justify text-center">{`${"Inspirasi Mahasiswa di Politeknik Negeri Bali"}`}</h3> 
                                </div>
                                <h2 className="text-primary font-semibold italic text-lg lg:text-left text-center mt-2 lg:mt-5">#MakeItHappen</h2>
                            </div> */}
                            <div className="flex flex-col w-full lg:w-[70%] justify-center items-center text-center">
                                <h1 className="uppercase text-sm md:text-4xl lg:text-6xl font-semibold" data-aos="fade-up" data-aos-delay="300">unit kegiatan mahasiswa</h1>
                                <h1 className="uppercase text-sm md:text-4xl lg:text-6xl font-semibold pb-5" data-aos="fade-up" data-aos-delay="300">computer club</h1>
                                <div className="mb-2 lg:mb-5 text-xs md:text-lg" data-aos="fade-up" data-aos-delay="400">
                                    <h3>Temukan divisi yang sesuai dengan minatmu</h3>
                                    <h3>dan kembangkan potensimu bersama UKM Computer Club</h3>
                                </div>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoupO5ST_r2kXdSq9W7658ZO8XkFGbw1WnLydVOieJLlKiGA/viewform" className="font-medium bg-secondary hover:bg-primary text-sm md:text-lg py-2 px-3 rounded-lg text-white ease-in-out transition-all" target='_blank' data-aos="fade-up" data-aos-delay="600">Daftar Sekarang</a>
                                <h2 className="text-white font-semibold italic text-sm md:text-2xl mt-2 lg:mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear" data-aos-delay="600">
                                #MakeItHappen
                                </h2>
                            </div>

                            {/* <div className="w-[35%] hidden lg:block" data-aos="zoom-in">
                                <div className="w-full my-5 ml-5">
                                    <img src={imagesData.bersama} className="w-full rounded-md -rotate-3" alt="Foto 1"></img>
                                </div>
                                <div className="w-full relative -left-12 top-3 mb-5">
                                    <img src={imagesData.bersama2} className="w-full rounded-md rotate-3" alt="Foto 2"></img>
                                </div>
                            </div> */}
                        </div>
                    </div>
            </section>

            <section className="bg-hitam w-full flex justify-evenly py-2 p-2 text-white" id="tentang">
                <p className="italic font-semibold text-xl">#MakeItHappen</p>
                <p className="italic font-semibold text-xl">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden md:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden md:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden lg:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden lg:block">#MakeItHappen</p>
                <p className="italic font-semibold text-xl hidden lg:block">#MakeItHappen</p>
            </section>

            <section className="px-5 py-16 md:pt-40 relative" data-aos="md:fade-up">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* <div className="w-[30%] hidden lg:block" data-aos="zoom-in">
                        <div className="w-full my-5 ml-5">
                            <img src={imagesData.bersama} className="w-full rounded-md -rotate-3" alt="Foto 1"></img>
                        </div>
                        <div className="w-full relative top-3 mb-5">
                            <img src={imagesData.bersama2} className="w-full rounded-md rotate-3" alt="Foto 2"></img>
                        </div>
                    </div> */}
                    <div className="w-full lg:w-[55%] ht-1idden lg:block" data-aos="zoom-in">
                        <div className="pt-10 pl-10 md:pt-15 w-full flex aspect-video justify-center">
                            <YouTube videoId={homepage.videoYoutube} className="aspect-video" opts={opts} onReady={onPlayerReady} iframeClassName="w-full md:w-konten mx-auto h-full lg:rounded-2xl"/>
                            {/* <img src={imagesData.LOGO_UKM_BERWARNA} className="w-full" alt="Foto 1"></img> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-[45%] pr-20 flex-col items-center" data-aos="fade-up">
                        <h1 className="text-center text-xl md:text-4xl lg:text-left lg:text-6xl font-semibold mb-5">Tentang Kami</h1>
                        <div className="mb-2 lg:mb-5 md:text-lg"> 
                            <h3 className="lg:text-justify text-center">Unit Kegiatan Mahasiswa Computer Club merupakan wadah bagi mahasiswa Politeknik Negeri Bali untuk <b>mengeksplorasi dan mengembangkan kemampuan di dunia teknologi.</b> Dengan berbagai <b>kegiatan dan proyek digital</b>, kami membangun lingkungan yang mendorong anggota untuk <b>belajar, berkolaborasi, dan berinovasi.</b></h3>
                        </div>
                    </div>
                </div>
                
                {/* <div className="pt-16 md:pt-32 w-full flex aspect-video justify-center">
                    <YouTube videoId={homepage.videoYoutube} className="aspect-video" opts={opts} onReady={onPlayerReady} iframeClassName="w-full md:w-konten mx-auto h-full lg:rounded-2xl"/>
                </div> */}

                {/* <div className="w-full md:w-2/3 md:mx-auto rounded-2xl px-2 py-5 border-8 border-double border-putih bg-secondary relative">
                    <div className="mx-auto w-20 my-5">
                        <img src={imagesData.LOGO_UKM_PUTIH} className="w-full" loading="lazy"></img>
                    </div>

                    <div className="my-5 text-white">
                        <h1 className="text-center text-2xl font-semibold">Tentang UKM Computer Club</h1>
                    </div>

                    <div className="w-full md:w-4/5 p-2 pb-12 mx-auto text-justify text-white">
                        <p className="font-medium ">Unit Kegiatan Mahasiswa Computer Club merupakan salah satu Unit Kegiatan Mahasiswa yang berada di lingkungan Politeknik Negeri Bali yang berfokus pada pengembangan keterampilan dan pengetahuan di bidang teknologi informasi. Sebagai wadah bagi mahasiswa yang memiliki minat dan bakat di bidang teknologi, UKM Computer Club berperan sebagai platform untuk mengasah pengetahuan dan keterampilan yang relevan di era digital. Dengan tujuan utama memberdayakan mahasiswa, UKM Computer Club menyediakan berbagai kesempatan bagi anggota untuk mengembangkan diri melalui berbagai program seperti pelatihan, kompetisi hingga project-project yang relevan dengan dunia digital.</p>
                    </div>
                </div> */}
            </section>

            <section className="pt-10 relative" id="divisi">
                <div className="w-konten mx-auto" data-aos="fade-up">
                    <h1 className="text-center font-semibold text-xl md:text-4xl lg:text-6xl mt-10 mb-2">Divisi UKM Computer Club</h1>
                    <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-1/2 md:mx-auto">Ada 4 divisi di Unit Kegitan Mahasiswa Computer Club yang merupakan pendalaman lebih khusus mengenai ketertarikan dan minat para mahasiswa.</p>

                    <div className="lg:w-full">
                        {divisiData.map((Data) =>(
                            <Card key={Data.id} img={Data.img} divisi ={Data.divisi} deskripsi={Data.deskripsi} href={Data.href} singkatan={Data.singkatan} rekomendasi={Data.rekomendasi }
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="md:pt-10 mt-10 realtive" id="proker">
                <div className="p-2 bg-hitam py-10">
                    <div className="text-putih" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-4xl lg:text-6xl mb-2">Program Kerja</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:mx-auto">Ada 3 program kerja di Unit Kegitan Mahasiswa Computer Club yang bergerak dalam bidang IT.</p>
                    </div>

                    <div className="flex p-2 justify-center items-stretch mx-auto flex-wrap" data-aos="zoom-in">
                        {prokerData.map((Data) =>(
                            <CardProker key={Data.id} logo={Data.logo} img={Data.img} divisi ={Data.name} deskripsi={Data.deskripsi} href={Data.href}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-32" id="fungsio">
                <div className="w-konten mx-auto relative z-10">
                    <div className="lg:flex lg:justify-between items-center">
                        <div className="w-full lg:hidden block">
                            <div className="w-full my-5" data-aos="zoom-in">
                                <img src={imagesData.bersama2} className="w-full rounded-md" alt="Foto 1" loading="lazy"></img>
                            </div>
                        </div>

                        <div className="w-full lg:w-[60%] p-1" data-aos="fade-up">
                            <h1 className="uppercase text-center text-xl md:text-2xl lg:text-left lg:text-4xl font-semibold mb-2">Fungsionaris UKM Computer Club</h1>
                            <div className="mb-6 md:text-lg"> 
                                <h3 className="lg:text-justify text-center">Yuk kenalan dengan fungsionaris kami</h3> 
                            </div>
                            <Button divClass="flex justify-center lg:inline" href="/fungsionaris" text="Lihat Selengkapnya"></Button>
                        </div>

                        <div className="w-[30%] mr-16 hidden lg:block">
                            <div className="w-full my-5 ml-5"  data-aos="zoom-in">
                                <div className="w-full my-5 ml-5">
                                    <img src={imagesData.bersama} className="w-full rounded-md -rotate-3" alt="Foto 1"></img>
                                </div>
                                <div className="w-full relative -left-12 top-3 mb-5">
                                    <img src={imagesData.bersama2} className="w-full rounded-md rotate-3" alt="Foto 2"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:pt-32 md:pb-20" id="faq">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 w-konten" data-aos="fade-up">
                    <div className="mx-auto text-center">
                        <h1 className="text-center font-semibold text-xl md:text-4xl lg:text-6xl mt-10 mb-5">Pertanyaan yang Sering Ditanyakan</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:mx-auto">Yuk cek, siapa tau pertanyaan kamu ada disini 😊</p>
                    </div>
    
                    <div className="w-full max-w-2xl mx-auto">    
                        {/* <div className="lg:w-[50%]"> */}
                            {data1.map((Data) => (
                                <div key={Data.id} className="transition-all m-3 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                    <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAnswer(Data.id)}>
                                        <span className="flex text-sm lg:text-base font-semibold text-black text-left w-[28rem]">{Data.question}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestion === Data.id ? 'rotate-0' : 'rotate-180'}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
    
                                    <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${openQuestion === Data.id ? 'block' : 'hidden'}`}>
                                        <div className="text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: Data.answer }} />
                                    </div>
                                </div>
                            ))}
                        {/* </div> */}
    
                        {/* <div className="lg:w-[48%]">
                            {data2.map((Data) => (
                                <div key={Data.id} className="transition-all m-3 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                    <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAnswer(Data.id)}>
                                        <span className="flex text-sm lg:text-base font-semibold text-black text-left w-[28rem]">{Data.question}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestion === Data.id ? 'rotate-0' : 'rotate-180'}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
    
                                    <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${openQuestion === Data.id ? 'block' : 'hidden'}`}>
                                        <div className="text-sm lg:text-base" dangerouslySetInnerHTML={{ __html: Data.answer }} />
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
    
    
                    <p className="text-center text-gray-600 textbase mt-9">
                        Punya pertanyaan lainya? Bisa sampaikan pada 
                        <span className="cursor-pointer font-medium text-primary transition-all duration-200 hover:text-secondary focus:text-tertiary"> <b><a href="https://www.instagram.com/ukmcomputerclub?igsh=cWRwcmYzZjUyOHgw" className="underline" target="_blank">Instagram Kami</a></b> </span>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
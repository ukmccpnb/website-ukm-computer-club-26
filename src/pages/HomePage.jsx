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
import { Link } from "react-router-dom";
import benderaukm from '../assets/img/hero/benderaukm.png'

function HomePage() {
    const [openQuestion, setOpenQuestion] = useState(null);
    const [currentProkerSlide, setCurrentProkerSlide] = useState(0);

    const nextProkerSlide = () => setCurrentProkerSlide((prev) => (prev === prokerData.length - 1 ? 0 : prev + 1));
    const prevProkerSlide = () => setCurrentProkerSlide((prev) => (prev === 0 ? prokerData.length - 1 : prev - 1));

    const toggleAnswer = (id) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };
    const onPlayerReady = (event) => {
        event.target.playVideo();
    }

    const opts = {
        playerVars: {
            controls: 1,
            autoplay: 0,
            iv_load_policy: 3,
            playsinline: 1,
            fs: 1,
            rel: 0,
            disablekb: 0,
            showinfo: 0,
            mute: 0,
            loop: 1,
            playlist: "kLi-hF7cmW4",
        },
    };

    return (
        <div>
            <div className="absolute inset-0 bg-cover scale-105 brightness-50" />

<section 
    className="relative min-h-screen pt-40 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-cover bg-[20%_center] md:bg-center flex items-center"
    style={{ 
        backgroundImage: `url(${benderaukm})`
    }}
    id="beranda"
>
    {/* Gradient overlay: Lebih gelap di area teks mobile agar grafis putih bendera tidak menabrak teks, tetap mulus di desktop */}
    <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-black/10"></div>
    
    <div className="w-konten mx-auto px-4 relative z-10">
    <div className="flex flex-col items-start text-left">
        <h1 className="uppercase text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Unit Kegiatan <br />Mahasiswa <span className="text-secondary"> <br />Computer Club</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg">
            Temukan divisi yang sesuai dengan minatmu dan kembangkan potensimu bersama UKM Computer Club.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
                to="/quiz"
                className="bg-secondary hover:bg-primary text-white font-semibold text-sm md:text-base py-3 px-6 rounded-full transition-all text-center"
            >
                Find Your Division
            </Link>

            <a
                href="#tentang"
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("tentang")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/10 hover:bg-white text-white hover:text-hitam font-semibold text-sm md:text-base py-3 px-6 rounded-full border border-white/20 hover:border-white transition-all duration-300 text-center"
            >
                Pelajari Lebih Lanjut
            </a>
        </div>
    </div>
</div>
</section>

            <section className="px-5 py-16 md:pt-40 relative" id="tentang" data-aos="md:fade-up">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* <div className="w-[30%] hidden lg:block" data-aos="zoom-in">
                        <div className="w-full my-5 ml-5">
                            <img src={imagesData.bersama} className="w-full rounded-md -rotate-3" alt="Foto 1" loading="lazy" decoding="async"></img>
                        </div>
                        <div className="w-full relative top-3 mb-5">
                            <img src={imagesData.bersama2} className="w-full rounded-md rotate-3" alt="Foto 2" loading="lazy" decoding="async"></img>
                        </div>
                    </div> */}
                    <div className="w-full lg:w-[55%]" data-aos="zoom-in">
                        <div className="px-4 lg:px-0 lg:pl-10 w-full flex aspect-video justify-center">
                            <YouTube key={homepage.videoYoutube} videoId={homepage.videoYoutube} className="w-full aspect-video" opts={opts}  iframeClassName="w-full h-full rounded-lg lg:rounded-2xl" />
                            {/* <img src={imagesData.LOGO_UKM_BERWARNA} className="w-full" alt="Foto 1" loading="lazy" decoding="async"></img> */}
                        </div>
                    </div>
                    <div className="w-full lg:w-[45%] px-4 lg:px-0 lg:pr-20 flex-col items-center" data-aos="fade-up">
                        <h1 className="text-center text-xl md:text-4xl lg:text-left lg:text-6xl font-semibold mb-5 mt-5 lg:mt-0">Tentang Kami</h1>
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
                        <img src={imagesData.LOGO_UKM_PUTIH} className="w-full" loading="lazy" decoding="async"></img>
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
                    <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:w-1/2 md:mx-auto">Kenali 4 divisi yang ada di UKM Computer Club dan temukan pilihan yang paling sesuai dengan minat dan ketertarikanmu.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:w-full mt-10">
                        {divisiData.map((Data) => (
                            <Card key={Data.id} img={Data.img} divisi={Data.divisi} href={Data.href} singkatan={Data.singkatan} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="md:pt-10 mt-10 relative scroll-mt-24 md:scroll-mt-28" id="proker">
                <div className="p-2 py-10">
                    <div className="text-hitam" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-4xl lg:text-6xl mb-5">Program Kerja</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:mx-auto">Terdapat 3 program kerja di Unit Kegiatan Mahasiswa Computer Club</p>
                    </div>

                    <div className="w-full lg:w-konten mx-auto h-[420px] md:h-[580px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl relative group" data-aos="zoom-in">

                        {/* Carousel Track */}
                        <div
                            className="flex h-full w-full transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentProkerSlide * 100}%)` }}
                        >
                            {prokerData.map((Data, index) => (
                                <div
                                    key={Data.id}
                                    className="min-w-full h-full bg-[#151722] flex flex-col rounded-2xl overflow-hidden"
                                >
                                    {/* FOTO */}
                                    <div className="relative h-[45%] md:h-[50%] shrink-0 overflow-hidden">
                                        <img
                                            src={Data.img}
                                            alt={Data.name}
                                            className="w-full h-full object-cover object-[center_60%]"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#151722]/70 via-transparent to-transparent"></div>
                                    </div>

                                    {/* CONTENT */}
                                    <div 
    className="flex-1 text-left text-white flex flex-col"
    style={{ padding: '24px 40px' }}
>

                                        {/* Number + Line */}
                                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                                            <span className="text-secondary font-mono font-medium text-sm md:text-base">
                                                {String(index + 1).padStart(2, "0")} / {String(prokerData.length).padStart(2, "0")}
                                            </span>
                                            <div className="flex-1 h-px bg-white/10"></div>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                                            {Data.name}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed line-clamp-2 md:line-clamp-3 max-w-full md:max-w-2xl mb-4 md:mb-6">
                                            {Data.deskripsi}
                                        </p>

                                        {/* Footer: Button + Indicator + Nav, sejajar */}
    <div className="mt-auto flex items-center justify-between gap-3">
    <Button href={Data.href} text="Baca Selengkapnya →" />

                                            <div className="flex items-center gap-3 md:gap-4">
                                    
                                                {/* Navigator */}
    <div className="flex gap-2">
        <button
            onClick={prevProkerSlide}
            className="flex h-8 w-8 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#1b1e2a] border border-white/10 hover:bg-secondary text-white transition-all duration-300 active:scale-75 shadow-lg outline-none"
            aria-label="Previous program kerja"
        >
            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button
            onClick={nextProkerSlide}
            className="flex h-8 w-8 md:h-11 md:w-11 items-center justify-center rounded-full bg-[#1b1e2a] border border-white/10 hover:bg-secondary text-white transition-all duration-300 active:scale-75 shadow-lg outline-none"
            aria-label="Next program kerja"
        >
            <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

<section className="py-16 md:py-20 lg:py-24" id="fungsio">
    <div className="w-konten mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Foto bulat + badge melayang */}
            {/* <div className="w-full lg:w-1/2 flex justify-center relative" data-aos="zoom-in">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Foto bulat */}
                    {/* <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-secondary/20">
                        <img src={imagesData.bersama} className="w-full h-full object-cover object-[55%_center]" alt="Fungsionaris UKM Computer Club" loading="lazy" decoding="async" />
                    </div> */} 

                    {/* Badge melayang */}
                    {/* <span className="absolute -top-2 left-4 bg-white shadow-lg rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-secondary">Inti</span>
                    <span className="absolute top-16 -left-10 bg-secondary shadow-lg rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-white">Office</span>
                    <span className="absolute top-1/4 -right-8 bg-white shadow-lg rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-secondary">Web Dev</span>
                    <span className="absolute bottom-10 -left-6 bg-secondary shadow-lg rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-white">VCD</span>
                    <span className="absolute -bottom-4 right-6 bg-white shadow-lg rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-secondary">Game Dev</span>
                </div>
            </div> */}

            <div className="w-full lg:w-1/2" data-aos="zoom-in">
    <div className="rounded-2xl overflow-hidden shadow-xl">
        <img src={imagesData.bersama} className="w-full aspect-[4/3] object-cover object-[60%_center]" alt="Fungsionaris UKM Computer Club" loading="lazy" decoding="async" />
    </div>
    <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
<span className="bg-secondary text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full">Inti</span>
<span className="bg-secondary text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full">Office</span>
<span className="bg-secondary text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full">Web Dev</span>
<span className="bg-secondary text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full">VCD</span>
<span className="bg-secondary text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full">Game Dev</span>
    </div>
</div>

            {/* Teks kanan */}
            <div className="w-full lg:w-1/2" data-aos="fade-up">
                <p className="text-secondary font-semibold text-xs md:text-sm uppercase tracking-widest mb-2 text-center lg:text-left">Tentang Kami</p>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center lg:text-left">
                    Kenalan dengan <span className="text-secondary">Fungsionaris</span> Kami
                </h1>
                <p className="text-sm md:text-base text-gray-600 mb-8 text-center lg:text-left">
                    Yuk kenalan lebih dekat dengan para fungsionaris yang menjalankan roda organisasi UKM Computer Club.
                </p>

                {/* Statistik */}
                <div className="flex justify-center lg:justify-start gap-8 md:gap-12 mb-8">
    <div className="inline-flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">4</h2>
        <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap">Divisi</p>
    </div>
    <div className="inline-flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">30+</h2>
        <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap">Fungsionaris</p>
    </div>
    <div className="inline-flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">3</h2>
        <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap">Program Kerja</p>
    </div>
</div>

                <Button divClass="flex justify-center lg:inline" href="/fungsionaris" text="Lihat Selengkapnya"></Button>
            </div>
        </div>
    </div>
</section>

            <section className="py-16 md:pt-16 md:pb-20" id="faq">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 w-konten" data-aos="fade-up">
                    <div className="mx-auto text-center">
                        <h1 className="text-center font-semibold text-xl md:text-4xl lg:text-6xl mt-10 mb-5">Pertanyaan yang Sering Ditanyakan</h1>
                        <p className="text-center font-normal text-sm md:text-base mb-10 w-full md:mx-auto">Yuk cek, siapa tau pertanyaan kamu ada disini</p>
                    </div>

                    <div className="w-full max-w-2xl mx-auto">
                        {/* <div className="lg:w-[50%]"> */}
                        {data1.map((Data) => (
                            <div key={Data.id} className="transition-all m-3 duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                                <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAnswer(Data.id)}>
                                    <span className="flex text-sm lg:text-base font-semibold text-black text-left w-[28rem]">{Data.question}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestion === Data.id ? 'rotate-180' : 'rotate-0'}`}>
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
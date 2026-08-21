import { useNavigate, useParams } from "react-router-dom";
import prokerData from "../../data/proker/data";
import Dokumentasi from "../../component/Dokumentasi";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "../../component/CountUp";
import CarouselProker from "../../component/CarouselProker";
import InstagramEmbed from "../../component/InstagramEmbed";
import ct from "../../assets/img/logo lomba intech/ct.png";
import ctf from "../../assets/img/logo lomba intech/ctf.png";
import pnbdc from "../../assets/img/logo lomba intech/pnbdc.png";
import pnbwdc from "../../assets/img/logo lomba intech/pnbwdc.png";

function ProkerPage() {
    const { proker } = useParams();
    const navigate = useNavigate();
    const prokerDetail = prokerData.find((data) => data.singkatan === proker);

    const onPlayerReady = (event) => {
        event.target.pauseVideo();
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
        playlist: prokerDetail.videoYoutube,
    },
    };

    return (
        prokerDetail ? (
            <div>
                <div className="absolute inset-0 -z-10 bg-ornamen bg-fixed"/>

                <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden" data-aos="fade-down">
    {/* Background gelap */}
<div
    className="absolute inset-0 bg-cover brightness-[0.25] scale-105"
    style={{
        backgroundImage: `url(${prokerDetail.img})`,
        backgroundPosition: "center 30%",
    }}
></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

    {/* Konten */}
    <div className="relative z-10 w-konten mx-auto px-4 text-center text-white">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm font-medium mb-4 text-gray-300">
            <span onClick={() => navigate("/")} className="cursor-pointer hover:text-white transition-colors">Beranda</span>
            <span className="mx-2">/</span>
            <span onClick={() => navigate("/#proker")} className="cursor-pointer hover:text-white transition-colors">Program Kerja</span>
            <span className="mx-2">/</span>
            <span className="text-secondary font-semibold">{prokerDetail.name}</span>
        </p>

        {/* Logo */}
        <div className="w-16 md:w-20 mx-auto mb-6">
            <img src={prokerDetail.logo} className="w-full rounded-lg" loading="lazy" decoding="async" alt={prokerDetail.name} />
        </div>

        {/* Judul */}
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl mb-6">{prokerDetail.name}</h1>

        {/* Deskripsi singkat */}
        <p className="text-sm md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {prokerDetail.deskripsi}
        </p>
    </div>

    {/* Indikator scroll */}
<button
    onClick={() => {
        document.getElementById("proker-tentang")?.scrollIntoView({ behavior: "smooth" });
    }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/70 text-xs font-medium tracking-widest cursor-pointer hover:text-white transition-colors"
    aria-label="Scroll ke bawah"
>
    <span className="mb-2 text-white">JELAJAHI</span>
    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
</button>
</section>

<section className="py-16 md:py-24 relative bg-white" id="proker-tentang">
    <div className="w-konten mx-auto px-4" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Teks kiri */}
            <div className="w-full lg:w-1/2">
                <p className="text-secondary font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">Tentang Kegiatan</p>
                <h2 className="font-bold text-2xl md:text-4xl mb-4">Apa itu {prokerDetail.name}?</h2>
                <div
                    className="text-sm md:text-base text-gray-600 leading-relaxed text-justify"
                    dangerouslySetInnerHTML={{ __html: prokerDetail.deskripsiDetail }}
                ></div>
            </div>

            {/* Foto kanan */}
            <div className="w-full lg:w-1/2 lg:mt-20">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={prokerDetail.dokumentasi1.path}
                        alt={prokerDetail.dokumentasi1.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </div>
</div>

       {/* Icon items */}
<div className="mt-16 mb-16 md:mb-24 flex flex-wrap justify-center gap-8 md:gap-12">
    {prokerDetail.items.map((item, index) => {
        const isIntechItem =
            item.text.includes("Web Design") ||
            item.text.includes("Design Challenge") ||
            item.text.includes("Capture The Flag") ||
            item.text.includes("ChillTalks");

        let logo = null;

        if (item.text.includes("Web Design")) {
            logo = pnbwdc;
        } else if (item.text.includes("Design Challenge")) {
            logo = pnbdc;
        } else if (item.text.includes("Capture The Flag")) {
            logo = ctf;
        } else if (item.text.includes("ChillTalks")) {
            logo = ct;
        }

        return (
            <div
                key={index}
                className="flex flex-col items-center text-center gap-3 w-32 md:w-40"
            >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                    {isIntechItem && logo ? (
                        <img
                            src={logo}
                            alt={item.text}
                            className="w-9 h-9 object-contain"
                        />
                    ) : (
                        <FontAwesomeIcon
                            className="w-6 h-6 text-secondary"
                            icon={item.icon}
                        />
                    )}
                </div>

                <p className="text-sm md:text-base font-medium text-gray-700">
                    {item.text}
                </p>
            </div>
        );
    })}
</div>

                    <div className="w-4/5 mx-auto bg-secondary rounded-[3rem] py-8 md:py-10 px-6 flex flex-col gap-6 lg:flex-row lg:gap-0 justify-evenly items-center text-white shadow-xl" data-aos="fade-up">
    {
        prokerDetail.facts.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 w-full">
                <h1 className="text-center font-extrabold text-4xl md:text-6xl lg:text-7xl">
                    <CountUp value={item.head} />
                </h1>
                <p className="text-center font-bold text-sm md:text-lg tracking-wide">{item.text}</p>
            </div>
        ))
    }
</div>
                </section>

                <section className="py-8 md:pb-20 relative">
                    <div className="pt-8 pb-4 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-2xl text-secondary m-auto mt-10">Video Pengenalan Panitia {prokerDetail.name}</h1>
                    </div>
                    <div className="w-full lg:w-3/4 flex aspect-video m-auto relative" data-aos="fade-up">
                        <YouTube videoId={prokerDetail.videoYoutube} className="aspect-video w-full" opts={opts} onReady={onPlayerReady} iframeClassName="w-konten mx-auto h-full lg:rounded-2xl"/>
                    </div>
                    <div className="pt-16 md:pt-20 pb-4 w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-semibold text-xl md:text-2xl text-secondary m-auto mt-10">Dokumentasi</h1>
                    </div>
                    <div className="w-konten mx-auto" data-aos="fade-up">
                        <h1 className="text-center font-bold text-xl md:text-6xl md:w-4/5 m-auto mb-6 leading-snug">Kegiatan {prokerDetail.name} {prokerDetail.periode}</h1>
                        <p className="text-center font-normal text-sm md:text-base w-full md:w-3/5 md:mx-auto">{prokerDetail.deskripsiDokumentasi}</p>
                    </div>
                    {/* <div className="p-2 w-konten mx-auto flex flex-wrap justify-center">
                        {
                            prokerDetail.dokumentasi.map((item, index) => (
                                <div key={index} className="w-96 m-1" data-aos="fade-up">
                                    <img src={item.path} alt={item.alt} className="w-full h-full object-cover rounded-md" loading="lazy" decoding="async" />
                                </div>
                            ))
                        }
                    </div> */}
                    <div className="w-full md:w-4/5 mx-auto mt-6">
                        <CarouselProker
                            images={[
                                prokerDetail.dokumentasi1,
                                prokerDetail.dokumentasi2,
                                prokerDetail.dokumentasi3,
                                prokerDetail.dokumentasi4,
                                prokerDetail.dokumentasi5,
                                prokerDetail.dokumentasi6,
                                prokerDetail.dokumentasi7,
                                prokerDetail.dokumentasi8,
                                prokerDetail.dokumentasi9,
                            ]}
                        />
                    </div>
                </section>
            </div>
        ) : navigate("/error")
    );
}

export default ProkerPage;
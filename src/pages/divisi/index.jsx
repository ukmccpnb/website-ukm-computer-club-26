import { useNavigate, useParams } from "react-router-dom";
import divisiData from "../../data/divisi/data";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function DivisiPage() {
    const {divisi} = useParams();
    const navigate = useNavigate();
    const divisiDetail = divisiData.find((data) => data.singkatan === divisi);
    const [lightboxImg, setLightboxImg] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const autoRef = useRef(null);

    if (!divisiDetail) { navigate("/error"); return null; }

    const accent = "#1576FF"; // Menggunakan warna biru Divisi Office untuk semua halaman

    // Gallery excludes the first item (group photo) if judul is empty
    const galleryItems = divisiDetail.itemsKegiatan.filter(item => item.judul !== "");

    return (
        <div>
            {/* ── HERO ──────────────────────────────────────────── */}
            <section className="relative h-screen flex items-center justify-center pt-24 md:pt-32 overflow-hidden">
                {/* Cover image */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: `url(${divisiDetail.imgCover})` }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.82)' }} />

                {/* Content */}
                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto" data-aos="fade-up">
                    {/* Breadcrumb */}
                    <nav className="flex items-center justify-center gap-2 mb-8 text-xs md:text-sm text-white/50 font-medium tracking-wide">
                        <a href="/" className="hover:text-white transition-colors duration-200">Beranda</a>
                        <span className="text-white/30">/</span>
                        <a href="/#divisi" className="hover:text-white transition-colors duration-200">Divisi</a>
                        <span className="text-white/30">/</span>
                        <span style={{ color: accent }}>{divisiDetail.divisi}</span>
                    </nav>

                    <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 drop-shadow-2xl px-4">
                        {divisiDetail.divisi}
                    </h1>

                    {/* Accent line under title */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-px w-16 md:w-24" style={{ backgroundColor: `${accent}66` }} />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                        <div className="h-px w-16 md:w-24" style={{ backgroundColor: `${accent}66` }} />
                    </div>

                    <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed text-center">
                        {divisiDetail.deskripsi}
                    </p>
                    <a
                        href="#tentang"
                        className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase">Jelajahi</span>
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            className="animate-bounce text-lg group-hover:text-white"
                            style={{ color: accent }}
                        />
                    </a>
                </div>
            </section>


            {/* ── ABOUT ─────────────────────────────────────────── */}
            <section id="tentang" className="py-20 md:py-32 bg-white relative">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: text */}
                        <div data-aos="fade-right" className="flex flex-col justify-center h-full">
                            <span
                                className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
                                style={{ color: accent }}
                            >
                                Tentang Divisi
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Apa yang kamu pelajari<br/>
                                <span style={{ color: accent }}>di divisi ini?</span>
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 text-justify">
                                {divisiDetail.deskripsiKegiatan}
                            </p>
                        </div>

                        {/* Right: Group photo */}
                        <div data-aos="fade-left">
                            {divisiDetail.itemsKegiatan[0] && (
                                <div className="rounded-3xl overflow-hidden shadow-2xl relative group mx-auto max-w-sm">
                                    <img
                                        src={divisiDetail.itemsKegiatan[0].gambar}
                                        alt={divisiDetail.itemsKegiatan[0].altGambar}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 aspect-[3/4]"
                                        loading="lazy"
                                    />
                                    {/* Overlay glow */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── GALLERY ───────────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-[#111] relative overflow-hidden">
                {/* Decorative glow */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
                    style={{ backgroundColor: accent }}
                />
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: accent }}>Kegiatan</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Galeri Divisi</h2>
                        <p className="text-gray-400 mt-4 max-w-xl mx-auto">Dokumentasi perjalanan dan kegiatan divisi {divisiDetail.divisi}.</p>
                    </div>

                    {/* Custom Carousel */}
                    {(() => {
                        const slides = galleryItems;
                        const total = slides.length;
                        const prev = () => setActiveSlide(i => (i - 1 + total) % total);
                        const next = () => setActiveSlide(i => (i + 1) % total);
                        return (
                            <div className="relative w-full" data-aos="fade-up">
                                {/* Main slide */}
                                <div
                                    className="relative overflow-hidden rounded-3xl cursor-pointer group"
                                    style={{ aspectRatio: '16/9' }}
                                    onClick={() => setLightboxImg(slides[activeSlide].gambar)}
                                >
                                    {slides.map((item, i) => (
                                        <div
                                            key={item.id}
                                            className="absolute inset-0 transition-opacity duration-500"
                                            style={{ opacity: i === activeSlide ? 1 : 0, pointerEvents: i === activeSlide ? 'auto' : 'none' }}
                                        >
                                            <img
                                                src={item.gambar}
                                                alt={item.altGambar}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            {/* Overlay with text */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                            {item.judul && (
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <span
                                                        className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white mb-2"
                                                        style={{ backgroundColor: accent }}
                                                    >
                                                        #{String(i).padStart(2,'0')}
                                                    </span>
                                                    <p className="text-white font-bold text-lg">{item.judul}</p>
                                                    <p className="text-gray-300 text-sm text-justify">{item.deskripsi}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Prev / Next buttons */}
                                <button
                                    onClick={e => { e.stopPropagation(); setActiveSlide(i => (i - 1 + total) % total); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
                                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', border: `1px solid ${accent}66` }}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>
                                <button
                                    onClick={e => { e.stopPropagation(); setActiveSlide(i => (i + 1) % total); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
                                    style={{ backgroundColor: 'rgba(0,0,0,0.5)', border: `1px solid ${accent}66` }}
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>

                                {/* Dot indicators */}
                                <div className="flex justify-center gap-2 mt-5">
                                    {slides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveSlide(i)}
                                            className="transition-all duration-300 rounded-full"
                                            style={{
                                                width: i === activeSlide ? '24px' : '8px',
                                                height: '8px',
                                                backgroundColor: i === activeSlide ? accent : 'rgba(255,255,255,0.3)',
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Thumbnail strip */}
                                <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                                    {slides.map((item, i) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveSlide(i)}
                                            className="flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300"
                                            style={{
                                                width: '80px',
                                                height: '56px',
                                                outline: i === activeSlide ? `2px solid ${accent}` : '2px solid transparent',
                                                opacity: i === activeSlide ? 1 : 0.5,
                                            }}
                                        >
                                            <img src={item.gambar} alt={item.altGambar} className="w-full h-full object-cover" loading="lazy" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>

                {/* Lightbox */}
                {lightboxImg && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setLightboxImg(null)}
                    >
                        <img
                            src={lightboxImg}
                            alt="Preview"
                            className="max-w-4xl max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                        />
                        <button
                            className="absolute top-6 right-6 text-white text-4xl leading-none hover:text-gray-300 transition"
                            onClick={() => setLightboxImg(null)}
                        >
                            ×
                        </button>
                    </div>
                )}
            </section>

            {/* ── KARYA / HASIL ─────────────────────────────────── */}
            {divisiDetail.karya && divisiDetail.karya.length > 0 && (
                <section className="py-20 md:py-28 bg-white relative">
                    <div className="max-w-6xl mx-auto px-6 md:px-10">
                        <div className="text-center mb-14" data-aos="fade-up">
                            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: accent }}>Showcase</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Karya & Hasil</h2>
                            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Beberapa karya dan hasil nyata yang telah dibuat oleh anggota divisi {divisiDetail.divisi}.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {divisiDetail.karya.map((item, index) => (
                                <div
                                    key={index}
                                    className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden h-52">
                                        <img
                                            src={item.gambar}
                                            alt={item.judul}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        {/* Tag badge */}
                                        <span
                                            className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                                            style={{ backgroundColor: accent }}
                                        >
                                            {item.tag}
                                        </span>
                                    </div>
                                    {/* Content */}
                                    <div className="p-6 bg-white">
                                        <h3 className="font-bold text-gray-900 text-xl mb-2">{item.judul}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed text-justify">{item.deskripsi}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── PROSPEK KARIR ─────────────────────────────────── */}
            {divisiDetail.prospekKarir && divisiDetail.prospekKarir.length > 0 && (
                <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
                    {/* Animated background grid */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `linear-gradient(${accent} 1px, transparent 1px), linear-gradient(90deg, ${accent} 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
                        style={{ backgroundColor: accent }}
                    />

                    <div className="relative max-w-6xl mx-auto px-6 md:px-10">
                        <div className="text-center mb-14" data-aos="fade-up">
                            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: accent }}>Masa Depan</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Prospek Karir</h2>
                            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Keterampilan yang kamu pelajari di divisi ini membuka banyak peluang karir menarik di dunia digital.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {divisiDetail.prospekKarir.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundColor: `${accent}22`, border: `1px solid ${accent}44` }}
                                    >
                                        <FontAwesomeIcon icon={item.icon} className="text-2xl" style={{ color: accent }} />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-3">{item.judul}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed text-justify">{item.deskripsi}</p>
                                    {/* Bottom accent line */}
                                    <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ backgroundColor: accent }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── MATERI AJAR ───────────────────────────────────── */}
            <section className="py-20 md:py-28 bg-gray-50 relative">
                <div className="max-w-6xl mx-auto px-6 md:px-10">
                    <div className="text-center mb-14" data-aos="fade-up">
                        <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3" style={{ color: accent }}>Kurikulum</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Materi Ajar</h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto">{divisiDetail.deskripsiMateri}</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {divisiDetail.itemsMateri.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex-1 min-w-[300px] max-w-[380px] w-full p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Background number */}
                                <span className="absolute right-8 top-6 text-6xl font-black text-gray-100 select-none group-hover:text-gray-50 transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white relative z-10"
                                    style={{ backgroundColor: accent }}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-xl mb-3 relative z-10">{item.judul}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-justify relative z-10">{item.deskripsi}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DivisiPage;
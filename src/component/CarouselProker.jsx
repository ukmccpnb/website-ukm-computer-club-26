import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselProker({ images }) {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="w-full">
            {/* Slide utama */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                    src={images[current].path}
                    alt={images[current].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                />

                {/* Tombol panah kiri */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                    aria-label="Sebelumnya"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Tombol panah kanan */}
                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                    aria-label="Selanjutnya"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
                            aria-label={`Ke foto ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Thumbnail strip di bawah */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`flex-shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${current === index ? "border-secondary opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                    >
                        <img src={img.path} alt={img.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CarouselProker;
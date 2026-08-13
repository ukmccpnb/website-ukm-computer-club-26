import { useRef } from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";
import { motion } from "framer-motion";

function CardCarousel({ data }) {
    const ref = useRef();

    return (
    <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            let slideWidth = 750;

            // Responsive condition
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth <= 1080) currentVisibleSlide = 2;
            if (parentWidth <= 800) {
                currentVisibleSlide = 1;
                slideWidth = parentWidth - 50;
            }

            return (
            <StackedCarousel ref={carouselRef} slideComponent={({ data, dataIndex }) => {
                const item = data[dataIndex];

                return (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="relative m-auto w-full aspect-video cursor-pointer">
                    
                    {/* Gambar utama */}
                    <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                        <img src={item.gambar} alt={item.altGambar} className="w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-110" loading="lazy" decoding="async" />
                    </div>

                    {/* Overlay gradien + teks */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl">
                        <div className="p-5 text-white relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="font-bold text-lg lg:text-xl drop-shadow-md">
                            {item.judul}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-sm lg:text-base drop-shadow">
                            {item.deskripsi}
                        </motion.p>
                        </div>
                    </div>

                    {/* Glow effect */}
                    <motion.div whileHover={{ boxShadow: "0px 0px 25px rgba(0, 200, 255, 0.7)" }} className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-secondary transition-all duration-500"/></motion.div>
                );
            }}
            slideWidth={slideWidth}
            carouselWidth={parentWidth}
            data={data}
            currentVisibleSlide={currentVisibleSlide}
            maxVisibleSlide={5}
            fadeDistance={0.6}
            customScales={[0.85, 0.65, 0.4, 0.2]}/>
            );
        }}
        />
    );
}

export default CardCarousel;

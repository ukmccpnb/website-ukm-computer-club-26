function Dokumentasi(props){
    const {image1, alt1, image2, alt2, image3, alt3, image4, alt4, image5, alt5, image6, alt6, image7, alt7, image8, alt8, image9, alt9} = props;

    return (
        <div className="w-konten mx-auto flex flex-wrap justify-center">
            <div className="w-konten flex flex-col md:flex-row justify-center items-center md:justify-between mb-[0.5%]" data-aos="zoom-in">
                <div className="w-[66.5%] h-full mb-1 md:mb-0">
                    <img src={`${image1}`} alt={`${alt1}`} className="w-full h-full object-cover rounded-md" loading="lazy" decoding="async" />
                </div>
                <div className="w-[33%] h-full flex md:flex-col justify-center md:justify-between">
                    <img src={`${image2}`} alt={`${alt2}`} className="w-full object-cover rounded-md mx-[1%] md:mx-0" loading="lazy" decoding="async" />
                    <img src={`${image3}`} alt={`${alt3}`} className="w-full object-cover rounded-md mx-[1%] md:mx-0" loading="lazy" decoding="async" />
                </div>
            </div>
            <div className="w-konten flex justify-between mb-[0.5%]" data-aos="zoom-in">
                <img src={`${image4}`} alt={`${alt4}`} className="w-[33%] h-full object-cover rounded-md" loading="lazy" decoding="async" />
                <img src={`${image5}`} alt={`${alt5}`} className="w-[33%] h-full object-cover rounded-md" loading="lazy" decoding="async" />
                <img src={`${image6}`} alt={`${alt6}`} className="w-[33%] h-full object-cover rounded-md" loading="lazy" decoding="async" />
            </div>
            <div className="w-konten flex flex-col md:flex-row justify-center items-center md:justify-between" data-aos="zoom-in">
                <div className="w-[33%] h-full flex md:flex-col justify-center md:justify-between md:mb-0">
                    <img src={`${image7}`} alt={`${alt7}`} className="w-full object-cover rounded-md mx-[1%] md:mx-0" loading="lazy" decoding="async" />
                    <img src={`${image8}`} alt={`${alt8}`} className="w-full object-cover rounded-md mx-[1%] md:mx-0" loading="lazy" decoding="async" />
                </div>
                <div className="w-[66.5%] h-full">
                    <img src={`${image9}`} alt={`${alt9}`} className="w-full h-full object-cover rounded-md" loading="lazy" decoding="async" />
                </div>
            </div>
        </div>
    )
}

export default Dokumentasi
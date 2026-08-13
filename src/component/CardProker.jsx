import Button from "./Button"

function CardProker(props) {
    const {img, divisi, deskripsi, href, logo} = props;
    return(
        <div>
            <div className="relative w-[20rem] md:w-[22.5rem] md:mx-5 md:my-2 hover:scale-105 transition-all ease-in-out duration-300 flex flex-col h-full">
                <div className="w-full relative z-10">
                    <img src={`${img}`} className="w-full rounded-ss-lg rounded-se-lg " loading="lazy" decoding="async"></img>
                </div>

                <div className="bg-white p-1 w-full relative rounded-lg z-20 -top-5 shadow-lg shadow-gray-300 realtive pt-10 flex flex-col h-full">
                    <div className="absolute bg-white rounded-full z-30 w-20 h-20 flex justify-center items-center overflow-hidden shadow-md -top-10 md:left-[8.6rem] left-[7.4rem]">
                        <img src={`${logo}`} className="w-[70%] mx-auto" loading="lazy" decoding="async"></img>
                    </div>

                    <div className="flex flex-col flex-grow">
                        <h3 className="font-semibold text-center my-3 text-lg">{divisi}</h3>
                        <p className="text-justify text-sm md:w-konten mx-auto mb-2 px-5 lg:px-0">{deskripsi}</p>
                        <div className="mt-auto">
                            <Button divClass="flex justify-center" href={href} text="Baca Selengkapnya"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProker